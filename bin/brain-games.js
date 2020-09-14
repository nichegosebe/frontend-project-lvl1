#!/usr/bin/env node

import { ask, say } from '../src/cli.js';

say('Welcome to the Brain Games!');

const playerName = ask('May I have your name?');

say(`Hello, ${playerName}`);
v;
