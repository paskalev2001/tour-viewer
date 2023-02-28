import config from "@/config"

export interface Tour {
  floors: Map<string, Floor[]>
}

export interface Floor {
  hotspots: Hotspot[]
}

export interface Hotspot {
  id: string
  fileName: string
  coordinates: {
    x: number,
    y: number
  }
}