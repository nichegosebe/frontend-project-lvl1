#!/usr/bin/env node
import { getRules, generateQA } from '../src/games/brain-prime-logic.js';
import gamePlay from '../src/index.js';

gamePlay(getRules, generateQA);
