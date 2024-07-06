<script setup>
import vinyl from "@/data/vinyl.json"
import {ref} from "vue";

const vinylList = ref(vinyl)
console.log(vinylList.value)
</script>

<template>
    <div>
        <h3> This is a list a all the vinyl lp's I own</h3>
        <table>
            <tbody>
            <tr>
                <th>Album</th>
                <th>Band/Artist</th>
            </tr>
            <tr v-for="vinyl in vinylList">
                <td>{{vinyl.title}}</td>
                <td>{{vinyl.band}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

div {
    color: #eee;
}

table td, table th {
    border-bottom: #666 solid 1px;
}

.specialFont {
    font-family: "Ink Free", serif;
}
</style>