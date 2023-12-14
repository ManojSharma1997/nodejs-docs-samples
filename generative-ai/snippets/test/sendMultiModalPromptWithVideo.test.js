// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Generative AI Stream MultiModal with Video', () => {
  const project = 'cloud-llm-preview1';
  const location = 'us-central1';
  const model = 'gemini-pro-vision';

  it('should create stream multimodal content', async () => {
    const output = execSync(
      `node ./sendMultiModalPromptWithVideo.js ${project} ${location} ${model}`
    );
    // Ensure that the conversation is what we expect for these images
    assert(output.match(/advertisement/));
  });
});