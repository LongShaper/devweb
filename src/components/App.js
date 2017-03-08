//Importer three.js
import * as THREE from 'three'

/**
 * App manager
 *
 * @class App
 */
class App {
	constructor(name) {
		//On initialiser une scène
		this.initScene()
	}

	//Methode: Initialiser une scene
	initScene(){
		console.info('initScene')

		// Create scene
			// On stock la hauteur et largeur de la page de navigation dans des variables
		this._width = window.innerWidth
		this._height = window.innerHeight


		this._scene = new THREE.Scene()

		// Init camera
		this.initCamera()

		// Init renderer
		this.initRenderer()

		// Render !!!
		this.render()

	}

	initCamera(){
		//On déclare des variables qui sont utiliser comme propriétés pour le THREE.PerspectiveCamera
		const fieldOfView = 60
		const aspectRatio = this._width / this._height
		const nearPlane = 1
		const farPlane = 2000

		this._camera = new THREE.PerspectiveCamera(
			fieldOfView,
			aspectRatio,
			nearPlane,
			farPlane
		)
	}

	initRenderer(){
		// Plusieurs possibilitées de rendu (canvas 2D, webGL 3D)
		this._renderer = new THREE.WebGLRenderer()
		this._renderer.setSize(this._width, this._height)
		document.body.appendChild(this._renderer.domElement)

	}

	render(){
		this._renderer.render(this._scene, this._camera)
	}
}

export default App