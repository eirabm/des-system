import { fetchTheme, themeAdapter, themeReducer } from './theme.slice';

describe('theme reducer', () => {
  it('should handle initial state', () => {
    const expected = themeAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(themeReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchThemes', () => {
    let state = themeReducer(undefined, fetchTheme.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = themeReducer(state, fetchTheme.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = themeReducer(
      state,
      fetchTheme.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
