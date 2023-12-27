#!/bin/bash

set -e

export GOLANG_VERSION=go1.21.5

export RUST_VERSION=1.71.1
# docker build -f Dockerfile-build --build-arg GOLANG_VERSION="$GOLANG_VERSION" --build-arg RUST_VERSION="$RUST_VERSION" -t teleport-multibuild .
# docker run -it --rm -v ${HOME}/x-tools/:/home/ubuntu/x-tools -v `pwd`:/home/ubuntu/teleport -w /home/ubuntu/teleport -u 1000:1000 teleport-multibuild

# Switch depending on the architecture which is passed as the script argument
case $1 in
    "arm64")
        export ARCH="arm64"
        export SYSROOT="${HOME}/x-tools/aarch64-centos7-linux-gnu/aarch64-centos7-linux-gnu/sysroot"

        export PATH="${HOME}/x-tools/aarch64-centos7-linux-gnu/bin:$PATH"
        export CC="aarch64-centos7-linux-gnu-cc --sysroot=${SYSROOT} -I${SYSROOT}/include" # Hacky but works
        export CXX="aarch64-centos7-linux-gnu-c++ --sysroot=${SYSROOT}"
        export LD="aarch64-centos7-linux-gnu-ld --sysroot=${SYSROOT}"
        export PKG_CONFIG_PATH="${SYSROOT}/lib/pkgconfig"
        ;;
    "arm")
        export ARCH="arm"
        export SYSROOT="${HOME}/x-tools/arm-centos7-linux-gnueabi/arm-unknown-linux-gnueabi/sysroot"
        ;;
    "i686")
        export ARCH="x86"
        export SYSROOT="${HOME}/x-tools/i686-centos7-linux-gnu/i686-unknown-linux-gnu/sysroot"
        ;;
    *)
        export ARCH="amd64"
        export SYSROOT="${HOME}/x-tools/x86_64-centos7-linux-gnu/x86_64-centos7-linux-gnu/sysroot"

        export PATH="${HOME}/x-tools/x86_64-centos7-linux-gnu/bin:$PATH"
        export CC="x86_64-centos7-linux-gnu-cc --sysroot=${SYSROOT} -I${SYSROOT}/include" # Hacky but works
        export CXX="x86_64-centos7-linux-gnu-c++ --sysroot=${SYSROOT}"
        export LD="x86_64-centos7-linux-gnu-ld --sysroot=${SYSROOT}"
        export PKG_CONFIG_PATH="${SYSROOT}/lib/pkgconfig"
        ;;
esac

rm -rf 3rdparty-${ARCH}
mkdir -p 3rdparty-${ARCH}

cd 3rdparty-${ARCH}

# Unlock sysroot
chmod -R +w "${SYSROOT}"

# Build and install

#zlib
git clone https://github.com/madler/zlib.git
cd zlib
./configure --prefix="${SYSROOT}"
make -j$(nproc)
make install

cd ..

#libzstd
git clone https://github.com/facebook/zstd.git
cd zstd

make -j$(nproc)
make install PREFIX=${SYSROOT}

cd ..

#libelf
git clone https://github.com/arachsys/libelf.git
cd libelf

# libelf build system is a bit weird, so we need to do this
make -j$(nproc)
make install PREFIX=${SYSROOT}/

cd ..

#libbpf
git clone https://github.com/libbpf/libbpf.git
cd libbpf/src

BUILD_STATIC_ONLY=y EXTRA_CFLAGS=-fPIC DESTDIR=${SYSROOT} V=1 make install install_uapi_headers

cd  ../..

#libtirpc
wget https://zenlayer.dl.sourceforge.net/project/libtirpc/libtirpc/1.3.4/libtirpc-1.3.4.tar.bz2
tar xvf libtirpc-1.3.4.tar.bz2
cd libtirpc-1.3.4

./configure --prefix="${SYSROOT}" --disable-gssapi --host=${ARCH}-centos7-linux-gnu
make -j$(nproc)
make install

cd ..

#libpam
git clone https://github.com/linux-pam/linux-pam.git
cd linux-pam

./autogen.sh
./configure --prefix="${SYSROOT}" --disable-doc  --disable-examples --includedir="${SYSROOT}/include/security" --host=${ARCH}
make -j$(nproc)
make install

cd ..

cd ..
# Build teleport
GOOS=linux GOARCH=${ARCH} CGO_ENABLED=1 make

# check
readelf -a build/teleport | grep -w -Eo "GLIBC_2\.[0-9]+(\.[0-9]+)?" | sort -u