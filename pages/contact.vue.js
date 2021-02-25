const Contact = {
    props: ['id'],
    data: function (){
        return {
            contact: {
                id:'',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                province: '',
                postal: '',
            }
        }
    },
    mounted: function(){
        db.collection('contact book').doc(this.id).get()
        .then(doc => {
            if (doc.exists){
                this.contact.id = doc.id
                this.contact.firstName = doc.data().firstName,
                this.contact.lastName = doc.data().lastName,
                this.contact.email = doc.data().email,
                this.contact.phone = doc.data().phone,
                this.contact.street = doc.data().street,
                this.contact.city = doc.data().city,
                this.contact.province = doc.data().province,
                this.contact.postal = doc.data().postal
            }
        })
    },
    template: `
        <b-container class="bv-example-row">
            <div class="col-6">
                <router-link class="text-secondary text-decoration-none" to="/"> Back </router-link>
            </div>

            <b-container class="bv-example-row">
                <b-row align-v="center">
                    <b-col>
                        <h2 class="display-4">{{ contact.firstName }} {{ contact.lastName }}</h2>
                    </b-col>
                    <b-col>
                        <div class = "col-12 d-flex justify-content-end">
                            <router-link :to="'/edit/' + contact.id">Edit</router-link>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div>{{ contact.email }}</div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div>{{ contact.phone }}</div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                    <div>{{ contact.street }}, {{ contact.city }}, {{ contact.province }} {{ contact.postal }}</div>
                    </b-col>
                </b-row>    
            </b-container>
        </b-container>
    `
}