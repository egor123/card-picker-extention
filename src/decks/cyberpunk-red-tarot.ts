import { Deck } from "./deck.ts";

export const cuberpunkTarotDeck: Deck = {
    name: "Cyberpunk Red Tarot",
    icon: "/cyberpunk-red-tarot/icon.svg",
    back_url: "/cyberpunk-red-tarot/card_back.jpg",
    cards: [
        {
            name: "(0) The Fool",
            url: "/cyberpunk-red-tarot/card_the_fool.jpg",
            desc: "The Fool is returned to the beginning of their journey by a lucky shot.",
            effect: "All of the victim's Cyberware is rendered inoperable for one hour. Cyberlimbs that are rendered inoperable act as their meat counterparts do when they have been dismembered, but they still hang loosely. Should this leave a target without any ability to sense an opponent, any Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness. If the victim has no Cyberware they instead suffer the Foreign Object Critical Injury and experience 3d6 Humanity Loss."
        },
        {
            name: "(I) The Magician",
            url: "/cyberpunk-red-tarot/card_the_magician.jpg",
            desc: "A battery sparks fire through The Magician's power.",
            effect: "The GM selects one of the victim's pieces of cyberware. That piece of cyberware is destroyed (although not beyond repair). Additionally, the victim is now Deadly On Fire (CP:R page 180). If the victim has no Cyberware, they are now Deadly on Fire, and one of their worn or held weapons malfunctions, requiring an Action to reverse the malfunction before it can be used again."
        },
        {
            name: "(II) The High Priestess",
            url: "/cyberpunk-red-tarot/card_the_high_priestess.jpg",
            desc: "The High Priestess guards the secret of poisoning from shrapnel.",
            effect: "The victim suffers the Foreign Object Critical Injury, except instead of re-suffering Bonus Damage whenever they move further than 4 m/yds on foot in a Turn, they must instead beat a DV 15 Resist Torture/Drugs Skill Check or suffer 3d6 damage directly to their Hit Points."
        },
        {
            name: "(III) The Empress",
            url: "/cyberpunk-red-tarot/card_the_empress.jpg",
            desc: "The Empress spreads blessings evenly amongst her childrens attacks.",
            effect: "The music swells. The next three successful Attack Checks made against a single opponent in this combat are guaranteed to inflict Critical Injuries, no matter what the damage dice say. This applies to Light Melee Weapons but not Biotoxins, Poisons, Stun Batons, and other weapons normally incapable of causing a Critical Injury."
        },
        {
            name: "(IV) The Emperor",
            url: "/cyberpunk-red-tarot/card_the_emperor.jpg",
            desc: "The Emperor grants a Player the authority to shape the narrative.",
            effect: "The GM selects a Player to choose one Critical Injury from the Head table (CP:R page 188), and one from the Body table (CP:R page 187). The victim suffers both of those Critical Injuries."
        },
        {
            name: "(V) The Hierophant",
            url: "/cyberpunk-red-tarot/card_the_hierophant.jpg",
            desc: "The Hierophant brings gifts, but requires a sacrifice to tradition.",
            effect: "The Attack deals twice the amount of damage it would have done, after armor and any multipliers are taken into account. However, if it was made by a weapon, that weapon is destroyed beyond repair."
        },
        {
            name: "(VI) The Lovers",
            url: "/cyberpunk-red-tarot/card_the_lovers.jpg",
            desc: "The Lovers bring the combatants even closer together.",
            effect: "This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, if it was a Melee Attack that drew The Lovers, the victim is now considered to be defender in a grapple with the attacker."
        },
        {
            name: "(VII) The Chariot",
            url: "/cyberpunk-red-tarot/card_the_chariot.jpg",
            desc: "The Chariot offers the control required to strike true.",
            effect: "The Attack finds a fortuitous flaw in the target's armor, which forms a gaping hole. The victim's armor in the damaged location is ablated by an additional 5 points, even if it was not penetrated by the Attack."
        },
        {
            name: "(VIII) Strength",
            url: "/cyberpunk-red-tarot/card_strength.jpg",
            desc: "Strength empowers an attack with overwhelming force.",
            effect: "The Attack deals an additional 25 damage. This additional damage is added to the rolled damage before armor SP is subtracted and/or any multipliers are calculated."
        },
        {
            name: "(IX) The Hermit",
            url: "/cyberpunk-red-tarot/card_the_hermit.jpg",
            desc: "The Hermit forcibly invites you on a journey inward.",
            effect: "The victim suffers the Lost Eye Critical Injury twice, although the penalty for the injury is only applied once. Should this leave a target without any ability to sense an opponent, any Skill Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness."
        },
        {
            name: "(X) Wheel of Fortune",
            url: "/cyberpunk-red-tarot/card_wheel_of_fortune.jpg",
            desc: "Wheel of Fortune twists with forces outside of human control.",
            effect: "The Attack goes wild. If it was a Ranged Attack, the GM randomly determines a new target to replace the intended target. If it was a Melee Attack, the person who caused Wheel of Fortune to be drawn immediately falls prone, and the Attack is considered a miss instead of a hit. Either way, any weapon used to make the Attack malfunctions, requiring an Action to reverse the malfunction before it can be used again."
        },
        {
            name: "(XI) Justice",
            url: "/cyberpunk-red-tarot/card_justice.jpg",
            desc: "Justice arrives to deliver piercing clarity and truth directly to the gut.",
            effect: "The Attack knocks the wind out of the victim. For the next minute they suffer a -5 penalty to Evasion Skill Checks when attempting to avoid a Melee Attack and they cannot dodge Ranged Attacks at all."
        },
        {
            name: "(XII) The Hanged Man",
            url: "/cyberpunk-red-tarot/card_the_hanged_man.jpg",
            desc: "The Hanged Man means sacrifice.",
            effect: "The victim is knocked prone and suffers the Spinal Injury and Whiplash Critical Injuries."
        },
        {
            name: "(XIII) Death",
            url: "/cyberpunk-red-tarot/card_death.jpg",
            desc: "Death is ever present, sudden, inevitable, and eternally transformative.",
            effect: "The victim must immediately roll a single Death Save. If they fail, they are reduced to 0 HP and are knocked unconscious for one minute. Upon regaining consciousness, the victim regains 3d6 Humanity Points (up to their maximum Humanity) from the experience."
        },
        {
            name: "(XIV) Temperance",
            url: "/cyberpunk-red-tarot/card_temperance.jpg",
            desc: "Temperance requires a choice for which you'll find your own meaning.",
            effect: "The victim must choose one of their limbs to suffer a Dismembered Critical Injury, and then must choose a different one of their limbs to suffer a Broken Critical Injury."
        },
        {
            name: "(XV) The Devil",
            url: "/cyberpunk-red-tarot/card_the_devil.jpg",
            desc: "The Devil exists to represent and punish your fear and excess.",
            effect: "This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, the victim suffers the Brain Injury and Lost Ear Critical Injuries."
        },
        {
            name: "(XVI) The Tower",
            url: "/cyberpunk-red-tarot/card_the_tower.jpg",
            desc: "The Tower is a disaster that reveals hidden resilience when it falls.",
            effect: "The victim suffers the Cracked Skull, Crushed Windpipe, and Whiplash Critical Injuries. These Injuries deal no Bonus Damage. For one hour, the victim cannot feel pain and can ignore the effects of the Seriously Wounded Wound State."
        },
        {
            name: "(XVII) The Star",
            url: "/cyberpunk-red-tarot/card_the_star.jpg",
            desc: "The Star represents an attack you can have faith in.",
            effect: "If the Star was drawn due to a Ranged Attack, it hits the first target, passes through, and ricochets into a second enemy within 20 m/yards, chosen by the GM. If there is no additional enemy, the ricochet instead hits the original target a second time. This ricochet Attack always hits and does so in the body. Roll new damage dice for the ricochet Attack. If The Star was drawn due to a Melee Attack, the victim suffers the Broken Ribs and Collapsed Lung Critical Injuries."
        },
        {
            name: "(XVIII) The Moon",
            url: "/cyberpunk-red-tarot/card_the_moon.jpg",
            desc: "The Moon shines over a vicious attack born of primal instinct.",
            effect: "The victim suffers the Foreign Object Critical Injury twice, once in the body and once in the head. If The Moon was drawn by a Melee Attack made using a melee weapon, that weapon is now stuck in the victim's body, and the attacker is disarmed."
        },
        {
            name: "(XIX) The Sun",
            url: "/cyberpunk-red-tarot/card_the_sun.jpg",
            desc: "The Sun is a celebration of carnage that overcomes all obstacles.",
            effect: "If the victim is carrying any grenades or other explosives, the GM chooses one of them to explode immediately . If they weren't carrying any grenades, the GM chooses a nonweapon piece of equipment on the victim to destroy beyond repair."
        },
        {
            name: "(XX) Jujement",
            url: "/cyberpunk-red-tarot/card_jujement.jpg",
            desc: "Judgement is a painful awakening you might not walk away from",
            effect: "The victim suffers the Crushed Fingers Critical Injury on one of their hands, and the Dismembered Hand Critical Injury on another hand."
        },
        {
            name: "(XXI) The World",
            url: "/cyberpunk-red-tarot/card_the_world.jpg",
            desc: "The World puts everything in perspective in a moment of understanding.",
            effect: "The character who caused The World to be drawn may take an additional Turn after this one. During this additional Turn they receive a +5 to any Skill Check, ignore the negative effects of all Wound States, and do not have to make a Death Save if Mortally Wounded."
        },
    ]
};