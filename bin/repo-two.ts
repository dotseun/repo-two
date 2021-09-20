#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { RepoTwoStack } from '../lib/repo-two-stack';

const app = new cdk.App();
new RepoTwoStack(app, 'RepoTwoStack');
