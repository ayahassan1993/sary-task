import { Hero } from "../models/hero.model";

export class HeroHelper {
    setheros(heros: any) {
        let returned: Hero[] = [];
        for (let index = 0; index < heros.length; index++) {
            let hero = heros[index]
            returned.push(this.setHero(hero))
        }
        return returned
    }

    setHero(hero: any) {
        return new Hero(
            hero.id,
            hero.name,
            hero.email,
            hero.phone,
            hero.date,
            hero.company,
            hero.country
        )
    }
}