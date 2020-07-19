export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: [];
    height: string;
    weight: string;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance:number;
    avg_spawns:number;
    spawn_time: string,
    multipliers: [];
    weaknesses: [],
    next_evolution: [{
      num: string;
      name: string;
    }]
}
