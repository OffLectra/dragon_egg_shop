// function egg(kind, type, habitat, size, danger, phone, owner, image) {
//     return {
//         kind, type, habitat, size, danger, phone, owner, image
//     }
// }

const egg = (kind, type, habitat, size, danger, phone, owner, image) => ({kind, type, habitat, size, danger, phone, owner, image})

const eggs = [
    egg('Great troublemaker', 'Aquatic', 'Oceans and large caves', 'Giant', 'Incredibly dangerous', '+1 234 56 78', 'Harold', 'images/ice.jpg'),
    egg('Deciduous woodcutter', 'Mysterious', 'Forest', 'Large', 'High', '+9 123 45 67', 'Florence', 'images/wood.jpg'),
    egg('Crimson ripper', 'Stone-eaters', 'Volcanoes', 'Large', 'Very high', '+8 912 34 56', 'Zella', 'images/lava.jpg'),
    egg('Armored wing', 'Mysterious', 'Gorges and cliffs', 'Large', 'Incredibly high', '+7 891 23 45', 'Jack', 'images/scales.jpg'),
    egg('Night Shine', 'Smashing', 'Hidden world', 'Middle', 'Incredibly high', '+6 789 12 34', 'Hiccup', 'images/magic.jpg'),
    egg('Ate', 'Stokers', 'Hidden world', 'Little', 'Small', '+5 678 91 23', 'Fred', 'images/pimple.jpg'),
    
    // {kind: 'Great troublemaker', type: 'Aquatic', habitat: 'Oceans and large caves', size: 'Giant', danger: 'Incredibly dangerous', phone: '123', image: ''}
]

new Vue({
    el: '#app',
    data: {
        eggs: eggs,
        egg: eggs[0],  //данные активной машины
        selectedEggIndex: 0,
        phoneVisibility: false,
        search: ''
    },
    methods: {
        selectEgg: function(index) {
            this.egg = eggs[index]
            this.selectedEggIndex = index
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredEggs() {
            var self = this
            const filtered = this.eggs.filter(function(egg) {
                return egg.kind.indexOf(self.search) > -1
            })
            return filtered
        }
    }
})