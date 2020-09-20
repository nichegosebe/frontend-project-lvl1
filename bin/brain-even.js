#!/usr/bin/env node
import { getRules, generateQA } from '../src/brain-even-logic.js';
import gamePlay from '../src/index.js';

gamePlay(getRules, generateQA);
