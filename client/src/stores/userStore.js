import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Nicholas Krivanec',
    location: 'Centerville, UT',
    email: 'nickkrivanec@gmail.com',
    expertSkills: [
       {label: 'C#',          class:'csharp-icon'}
      ,{label: 'JavaScript',  class:'js-icon'}
      ,{label: 'HTML',        class:'html-icon'}
      ,{label: 'CSS',         class:'css-icon'}
      ,{label: 'T-SQL',       class:'sql-icon'}
      ,{label: 'Vue',         class:'vue-icon'}
    ],
    proficientSkills: [
       {label:'C',            class:'c-icon'}
      ,{label:'C++',          class:'cpp-icon'}
      ,{label:'Python',       class:'python-icon'}
      ,{label:'Java',         class:'java-icon'}
      ,{label:'SVG',          class:'dna-spinner'}
    ],
    links: [
       {name: "LinkedIn"  ,icon: "linkedin"           ,title:"www.linkedin.com/in/nkrivanec"   ,url: "https://www.linkedin.com/in/nkrivanec"}
      ,{name: "GitHub"    ,icon: "github"             ,title:"www.github.com/nicholaskrivanec" ,url: "https://github.com/nicholaskrivanec"}
      ,{name: "Facebook"  ,icon: "facebook"           ,title:"www.facebook.com/nickkrivanec"   ,url: "https://www.facebook.com/nickkrivanec"}
      ,{name: "Instagram" ,icon: "instagram"          ,title:"www.instagram.com/krivankenstein"  ,url: "https://www.instagram.com/krivankenstein"}
      ,{name: "Twitter"   ,icon: "square-x-twitter"   ,title:"x.com/omiccoder"                 ,url: "https://x.com/omiccoder"}
    ],
    isLoading: true,
    data: null,
    profileImage: '../assets/profile_pic.png'
  })
  ,actions: {
    async loadData() {
      try {
        this.isLoading = true;
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
        this.data = { message: "Data successfully loaded." }; // Mock data
      } finally {
        this.isLoading = false;
      }
    }
  }
  
});