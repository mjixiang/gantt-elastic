<!--
/**
 * @fileoverview Group component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <g>
    <Task
      v-for="subtask in subtaskList"
      :task="subtask"
      :key="subtask.id">
    </Task>
  </g>
</template>

<script>
import taskMixin from './Task.mixin.js';
import Task from './Task.vue';
export default {
  name: 'Group',
  components: { Task },
  inject: ['root'],
  props: ['task'],
  mixins: [taskMixin],
  data() {
    return {};
  },
  computed: {
    subtaskList() {
      return this.task.tasks;
    },
  },
};
</script>