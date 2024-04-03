/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter long_type_number,eslint_disable,add_pb_suffix,server_grpc1,ts_nocheck
// @generated from protobuf file "teleport/lib/teleterm/v1/database.proto" (package "teleport.lib.teleterm.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
//
// Teleport
// Copyright (C) 2023  Gravitational, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Label } from "./label_pb";
/**
 * Database describes a database
 *
 * @generated from protobuf message teleport.lib.teleterm.v1.Database
 */
export interface Database {
    /**
     * uri is the cluster resource URI
     *
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
    /**
     * name is the name of the database
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * desc is the database description
     *
     * @generated from protobuf field: string desc = 3;
     */
    desc: string;
    /**
     * protocol is the protocol used by the database
     *
     * @generated from protobuf field: string protocol = 4;
     */
    protocol: string;
    /**
     * type is the database type, self-hosted or cloud-hosted.
     *
     * @generated from protobuf field: string type = 5;
     */
    type: string;
    /**
     * hostname is this database hostname
     *
     * @generated from protobuf field: string hostname = 6;
     */
    hostname: string;
    /**
     * addr is this database ip address
     *
     * @generated from protobuf field: string addr = 7;
     */
    addr: string;
    /**
     * labels is a list of labels for this database
     *
     * @generated from protobuf field: repeated teleport.lib.teleterm.v1.Label labels = 8;
     */
    labels: Label[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Database$Type extends MessageType<Database> {
    constructor() {
        super("teleport.lib.teleterm.v1.Database", [
            { no: 1, name: "uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "desc", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "protocol", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "hostname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "addr", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "labels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Label }
        ]);
    }
    create(value?: PartialMessage<Database>): Database {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.uri = "";
        message.name = "";
        message.desc = "";
        message.protocol = "";
        message.type = "";
        message.hostname = "";
        message.addr = "";
        message.labels = [];
        if (value !== undefined)
            reflectionMergePartial<Database>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Database): Database {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uri */ 1:
                    message.uri = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string desc */ 3:
                    message.desc = reader.string();
                    break;
                case /* string protocol */ 4:
                    message.protocol = reader.string();
                    break;
                case /* string type */ 5:
                    message.type = reader.string();
                    break;
                case /* string hostname */ 6:
                    message.hostname = reader.string();
                    break;
                case /* string addr */ 7:
                    message.addr = reader.string();
                    break;
                case /* repeated teleport.lib.teleterm.v1.Label labels */ 8:
                    message.labels.push(Label.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Database, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string uri = 1; */
        if (message.uri !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.uri);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string desc = 3; */
        if (message.desc !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.desc);
        /* string protocol = 4; */
        if (message.protocol !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.protocol);
        /* string type = 5; */
        if (message.type !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.type);
        /* string hostname = 6; */
        if (message.hostname !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.hostname);
        /* string addr = 7; */
        if (message.addr !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.addr);
        /* repeated teleport.lib.teleterm.v1.Label labels = 8; */
        for (let i = 0; i < message.labels.length; i++)
            Label.internalBinaryWrite(message.labels[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message teleport.lib.teleterm.v1.Database
 */
export const Database = new Database$Type();
