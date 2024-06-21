<template>
    <div>
        <h2>Available Quizzes</h2>
        <ul>
            <li v-for="quiz in quizzes" :key="quiz.id">
                <a :href="quiz.link">{{quiz.title}}</a>
            </li>
        </ul>
    </div>
    {{quizzes}}
</template>

<script>
    export default {
        props: ['quizzes'],

    };
</script>

<style scoped>

</style>