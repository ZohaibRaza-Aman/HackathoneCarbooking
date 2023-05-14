import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-kLiMFOhPcKAIFq3lq3YqIisjU4gqads",
  authDomain: "hackathonauth-8392b.firebaseapp.com",
  projectId: "hackathonauth-8392b",
  storageBucket: "hackathonauth-8392b.appspot.com",
  messagingSenderId: "518864965488",
  appId: "1:518864965488:web:b60e22139c311bc40809b5",
  measurementId: "G-G6T25VMNRW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
