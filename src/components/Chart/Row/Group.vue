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
    <component
      v-for="subtask in subtaskList"
      :task="subtask"
      :key="subtask.id"
      :is="subtask.type">
    </component>
  </g>
</template>

<script>
import taskMixin from './Task.mixin.js';
import Task from './Task.vue';
import Milestone from './Milestone.vue';
import Project from './Project.vue';
export default {
  name: 'Group',
  components: {
    Task,
    Milestone,
    Project,
  },
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