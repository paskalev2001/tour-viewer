import config from "@/config";
import type { Tour } from "./viewer_interfaces";

const testTour: Tour = {
  floors: new Map([
    ['test-data-1', [
      {
        hotspots: [
          {
            id: 'hotspot-1',
            fileName: '/src/assets/img/img1.jpg',
            coordinates: {
              x: 200,
              y: 100
            }
          },
          {
            id: 'hotspot-2',
            fileName: '/src/assets/img/img2.jpg',
            coordinates: {
              x: 450,
              y: 200
            }
          }
        ]
      }
    ]],
    ['test-data-2', [
      {
        hotspots: [
          {
            id: 'hotspot-3',
            fileName: 'image-3.jpg',
            coordinates: {
              x: 50,
              y: 100
            }
          },
          {
            id: 'hotspot-4',
            fileName: 'image-4.jpg',
            coordinates: {
              x: 250,
              y: 300
            }
          }
        ]
      },
      {
        hotspots: [
          {
            id: 'hotspot-5',
            fileName: 'image-5.jpg',
            coordinates: {
              x: 150,
              y: 200
            }
          }
        ]
      }
    ]]
  ])
};


export default {
  data: new Map<string, Tour>([[config.tourId, testTour]])
}