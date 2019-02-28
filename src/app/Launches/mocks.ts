const totalCount = 40;

export const mock = {
  data: {
    launchesPastResult: {
      data: [...Array(5)].map((_, id) => ({
        id,
        mission_name: `Launch ${id}`
      })),
      result: { totalCount }
    }
  },
  error: false
};