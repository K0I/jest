/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

import {resolve} from 'path';
import runJest from '../runJest';
import {cleanup, writeFiles} from '../Utils';

const workdirNodeModules = resolve(
  __dirname,
  '..',
  'resolve-with-paths',
  'node_modules',
);

beforeAll(() => {
  writeFiles(resolve(workdirNodeModules, 'mod'), {
    'index.js': 'module.exports = 42;',
  });
});

afterAll(() => {
  cleanup(workdirNodeModules);
});

test('require.resolve with paths', () => {
  const {status} = runJest('resolve-with-paths');
  expect(status).toBe(0);
});
