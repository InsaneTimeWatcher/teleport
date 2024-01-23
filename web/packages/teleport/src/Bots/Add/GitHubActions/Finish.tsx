/**
 * Teleport
 * Copyright (C) 2023  Gravitational, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Flex from 'design/Flex';
import Image from 'design/Image';

import Text from 'design/Text';
import { ButtonPrimary, ButtonSecondary } from 'design/Button';

import celebratePamPng from 'teleport/Discover/Shared/Finished/celebrate-pam.png';
import cfg from 'teleport/config';

import { useGitHubFlow } from './useGitHubFlow';

export function Finish() {
  const { createBotRequest } = useGitHubFlow();

  return (
    <Flex
      width="600px"
      flexDirection="column"
      alignItems="center"
      mt={5}
      css={`
        margin-right: auto;
        margin-left: auto;
        text-align: center;
      `}
    >
      <Image width="120px" height="120px" src={celebratePamPng} />
      <Text mt={3} mb={2} typography="h4" bold>
        Your Bot is Added to Teleport
      </Text>
      <Text mb={3}>
        Bot {createBotRequest.botName} has been successfully added to this
        Teleport Cluster. You can see bot-{createBotRequest.botName} in the
        Teleport Users page and you can always find the sample GitHub Actions
        workflow again from the bot's options.
      </Text>
      <Flex>
        <ButtonPrimary mr="4" as={Link} to={cfg.getBotsRoute()} size="large">
          View Bots
        </ButtonPrimary>
        <ButtonSecondary
          as={Link}
          to={cfg.getIntegrationEnrollRoute(null)}
          size="large"
        >
          Add Another Integration
        </ButtonSecondary>
      </Flex>
    </Flex>
  );
}
