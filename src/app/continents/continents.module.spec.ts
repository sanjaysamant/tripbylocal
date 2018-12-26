import { ContinentsModule } from './continents.module';

describe('ContinentsModule', () => {
  let continentsModule: ContinentsModule;

  beforeEach(() => {
    continentsModule = new ContinentsModule();
  });

  it('should create an instance', () => {
    expect(continentsModule).toBeTruthy();
  });
});
