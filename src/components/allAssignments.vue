<template>
  <div>
    <b-jumbotron header="All Assignments"
      lead="A list of all class assignments."
      bg-variant="white">
      <div class="container">

        <div class="container px-5">
          <b-input-group id="addAssignment" v-on:submit.prevent="addNewAssignment" class="mt-2 mb-4">
            <b-form-input name="assignment" ref="assignment" placeholder="Assignment Name" required />
            <b-form-input name="date" ref="date" placeholder="Due Date  YYYY-mm-dd" required />
              <b-input-group-append>
                <b-button type="submit" v-on:click="addAssignment()">Add Assignment</b-button>
              </b-input-group-append>
          </b-input-group>
        </div>

        <b-table id="assignmentTable" hover
          :items="assignments"
          :fields="fields"
          :sort-by.sync="sortBy">

          <template slot="show-details" slot-scope="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template slot="row-details" slot-scope="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Assignment</b></b-col>
                <b-col>{{ row.item.assignmentName }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Due Date</b></b-col>
                <b-col>{{ row.item.dueDate }}</b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'allAssignments',
  data() {
    return {
      componentKey: 0,
      sortBy: 'dueDate',
      fields: [
          { key: 'assignmentName', sortable: true },
          { key: 'dueDate', sortable: true },
          { key: 'show-details', label: 'Actions' }
        ],
      assignments: [],
    }
  },
  mounted() {
    axios.get("https://uniapi.co/api/devTest/listAssignments").then(response => {
      this.assignments = response.data.assignments;
    });
  },
  methods: {
    addAssignment() {
      let newAssignment = new FormData();
        newAssignment.append('assignmentName', this.$refs.assignment.localValue);
        newAssignment.append('dueDate', this.$refs.date.localValue);
      axios.post("https://uniapi.co/api/devTest/createAssignment", newAssignment)
    }
  }
}
</script>