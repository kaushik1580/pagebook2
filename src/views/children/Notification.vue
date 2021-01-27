<template>
  <div>
    <v-container class="ma-5">
            <v-card v-for="text in team" :key="text.name">
                <v-card-text>
                    {{text.name}}-  {{text.role}}
                </v-card-text>
            </v-card>
    </v-container>
  </div>

</template>

<script>

export default {
  name: "Notification",
  data(){
    return {
        team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}

      ]
    }
  },
};
</script>
<style>
.ma-5{
    margin-left: 90%;
    width: 70%;
    margin-right: auto 0;
    /* margin-left: 60%; */
    position: fixed;
}
</style>
