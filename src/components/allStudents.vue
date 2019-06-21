<template>
  <div>
    <b-jumbotron header="All Students"
      lead="A list of all students in class."
      bg-variant="white">
      <div class="container">

        <div class="container px-5">
          <b-input-group id="addStudent" v-on:submit.prevent="addNewStudent" class="mt-2 mb-4">
            <b-form-input name="firstName" ref="firstName" placeholder="First Name" required />
            <b-form-input name="lastName" ref="lastName" placeholder="Last Name" required />
            <b-form-input name="birthday" ref="birthday" placeholder="Birthday" required />
              <b-input-group-append>
                <b-button v-on:click="addStudent()">Add Student</b-button>
              </b-input-group-append>
          </b-input-group>
        </div>

        <b-table hover
          :items="students"
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
                <b-col sm="3" class="text-sm-right"><b>Student</b></b-col>
                <b-col>{{ row.item.firstName }} {{ row.item.lastName }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Birthday</b></b-col>
                <b-col>{{ row.item.birthday }}</b-col>
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
  name: 'allStudents',
  data() {
    return {
      sortBy: 'lastName',
      fields: [
          { key: 'lastName', sortable: true },
          { key: 'firstName', sortable: true },
          { key: 'birthday', sortable: true },
          { key: 'show-details', label: 'Actions' }
        ],
      students: []
    }
  },
  mounted() {
    axios.get("https://uniapi.co/api/devTest/listStudents").then(result => {
        this.students = result.data.students;
    });
  },
  methods: {
    addStudent() {
      let newStudent = new FormData();
        newStudent.append('firstName', this.$refs.firstName.localValue);
        newStudent.append('lastName', this.$refs.lastName.localValue);
        newStudent.append('birthday', this.$refs.birthday.localValue);
      axios.post("https://uniapi.co/api/devTest/createStudent", newStudent)
    }
  }
}
</script>