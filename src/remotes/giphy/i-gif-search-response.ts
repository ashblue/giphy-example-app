export interface IGifSearchResponse {
  data: [
    {
      id: string;
      title: string;

      images: {
        fixed_width: {
          height: number;
          width: number;
          webp: string;
        };
      };
    },
  ];
}
