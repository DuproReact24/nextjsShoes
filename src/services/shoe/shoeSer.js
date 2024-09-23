export const shoeSer = {
  getAllshoe: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        next: {
          revalidate: 5,
        },
      });
      // Biến về định dạng json
      const newRes = await res.json();
      return newRes.content;
    } catch (error) {}
  },
};
