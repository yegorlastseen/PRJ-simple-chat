<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '../firebase/index'

export default{
    name: 'NewMessage',
    props:['name'],
    data() {
        return {
            newMessage:null,
            feedback: null,
        }
    },
    methods: {
        addMessage(){
            if(this.newMessage){
                db.collection('messages').add({
                    content:this.newMessage,
                    name:this.name,
                    timestamp: Date.now()
                }).catch(err =>{
                    console.log(err);
                })
            }else{
                this.feedback = "You must enter a message in order to send one"
            }
        }
    },
}
</script>