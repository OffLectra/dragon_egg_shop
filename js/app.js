// function egg(kind, type, habitat, size, danger, phone, owner, image) {
//     return {
//         kind, type, habitat, size, danger, phone, owner, image
//     }
// }

const egg = (id, kind, type, habitat, size, danger, phone, owner, image) => ({id, kind, type, habitat, size, danger, phone, owner, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const eggs = [
    egg(0,'Armored wing', 'Mysterious', 'Gorges and cliffs', 'Large', 'Incredibly high', '+7 891 23 45', 'Jack', 'images/scales.jpg'),
    egg(1,'Ate', 'Stokers', 'Hidden world', 'Little', 'Small', '+5 678 91 23', 'Fred', 'images/pimple.jpg'),
    egg(2,'Crimson ripper', 'Stone-eaters', 'Volcanoes', 'Large', 'Very high', '+8 912 34 56', 'Zella', 'images/lava.jpg'),
    egg(3,'Deciduous woodcutter', 'Mysterious', 'Forest', 'Large', 'High', '+9 123 45 67', 'Florence', 'images/wood.jpg'),
    egg(4,'Great troublemaker', 'Aquatic', 'Oceans and large caves', 'Giant', 'Incredibly dangerous', '+1 234 56 78', 'Harold', 'images/ice.jpg'),
    egg(5,'Night Shine', 'Smashing', 'Hidden world', 'Middle', 'Incredibly high', '+6 789 12 34', 'Hiccup', 'images/magic.jpg')
    
    // {kind: 'Great troublemaker', type: 'Aquatic', habitat: 'Oceans and large caves', size: 'Giant', danger: 'Incredibly dangerous', phone: '123', image: ''}
]


new Vue({
    el: '#app',
    data: {
        eggs: eggs,
        egg: eggs[0],  //данные активной машины
        logs: [],
        selectedEggIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectEgg: function(index,id) {
            this.egg = eggs[id]
            this.selectedEggIndex = index
        },

        // selectEgg: function(index) {
        //     this.selectedEggIndex = index
        //     this.egg = this.filtredEggs[index]
        // }

        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.egg.kind} - ${this.egg.type}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.egg.kind} - ${this.egg.type}`, 'cancel')
            )
        }

    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        // filteredEggs() {
        //     return this.eggs.filter(egg => {
        //         return egg.kind.indexOf(this.search) > -1
        //     })
        // }
        filteredEggs(){
            return this.eggs.filter( 
                egg => ( egg.kind.indexOf(this.search) > -1 || egg.kind.toLowerCase().indexOf(this.search) > -1 || egg.type.toLowerCase().indexOf(this.search) > -1 || egg.type.indexOf(this.search) > -1 ) 
            );
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})