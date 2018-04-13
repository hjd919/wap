export default {
  namespace: 'count',
  state: {
    a: {
      b: {
        c: {
          count: 0,
          test:'a',
        },
      },
    },
  },
  reducers: {
    add(state) {
      state.a.b.c.count += 1;
      state.a.b.c.test += 'b';
    },
    setNewProp(state) {
      state.newProp = 'hi new prop';
    },
  },
};
