import {FXAAEffect} from 'postprocessing';
import {$effects} from '../model-effect-composer.js';
import {MVEffectBase} from './effect-base.js';

export class MVFXAAEffect extends MVEffectBase {
  static get is() {
    return 'mv-fxaa-effect';
  }

  constructor() {
    super();

    this[$effects] = [new FXAAEffect()];
  }
}
