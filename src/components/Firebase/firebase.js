import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyCnS13ylJOC3Ka9cGG1xhJbQdZ3nOeKw-s",
    authDomain: "cftracker-2da2b.firebaseapp.com",
    databaseURL: "https://cftracker-2da2b.firebaseio.com",
    projectId: "cftracker-2da2b",
    storageBucket: "cftracker-2da2b.appspot.com",
    messagingSenderId: "253362970016",
    appId: "1:253362970016:web:e274a8ab735b15486dd8c5"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

}

export default new Firebase();