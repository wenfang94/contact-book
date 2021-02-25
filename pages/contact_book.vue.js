const Contact_Book = { 
    data: function() {
        return {
            contacts: [],
            filtered: [],
        }
    },
    mounted: function () {
        db.collection('contact book').orderBy('lastName')
            .onSnapshot(snapshot => {
                const data = []
                snapshot
                    .forEach(doc => data.push({
                        id: doc.id,
                        firstName: doc.data().firstName,
                        lastName: doc.data().lastName,
                        email: doc.data().email,
                        phone: doc.data().phone,
                        street: doc.data().street,
                        city: doc.data().city,
                        province: doc.data().province,
                        postal: doc.data().postal
                }))
            this.contacts = data
            this.filtered = data
        })      
    },
    methods: {
        search: function (e) {
            const searchName = e.target.value
            this.filtered = this.contacts.filter(someone => {
                return (
                    someone.lastName.toLowerCase().includes(searchName) || someone.firstName.toLowerCase().includes(searchName)
                )
            })
            console.log(searchName)
        },

    },
    template: `
    <b-container class="bv-example-row">
        <b-row align-h="between" align-v="center">
            <b-col>
                <h2 class="display-4">Contact Book</h2>
            </b-col>
            <b-col class="d-flex justify-content-end">
                <b-button to="/new">
                    <router-link style="font-size:2rem; text-decoration: none; color:white;" to="/new">+</router-link>
                </b-button>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col style="margin:15px;">
                <input type="text" name="searchBar" placeholder="Search by Lastname" @keyup.prevent="search">
            </b-col>
        </b-row>
        
        <div class="contacts">
            <b-col>
                <ul class="list-group">
                    
                        
                    <router-link v-for="contact in filtered" class="text-secondary text-decoration-none list-group-item" :to="'/contact/' + contact.id">
                        {{ contact.firstName }} {{ contact.lastName }}
                    </router-link>
                   
                   
                </ul>
            </b-col>
        </div>
    </b-container>
    `,
    
}