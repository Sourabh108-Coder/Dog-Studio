import React, {useEffect, useRef} from 'react'
import {useThree} from '@react-three/fiber'
import {OrbitControls, useGLTF, useTexture, useAnimations} from '@react-three/drei'
import { normalMap } from 'three/tsl';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Dog = () => {

  //  GSAP and ScrollTrigger registeration.
    gsap.registerPlugin(useGSAP());
    gsap.registerPlugin(ScrollTrigger);

    // Loading the model.
    const model = useGLTF("/models/dog.drc.glb");

    // Setting up the camera.
    useThree(({camera,scene,gl})=>{
      camera.position.z = 0.7;
      gl.toneMapping = THREE.ReinhardToneMapping;
      gl.outputColorSpace = THREE.SRGBColorSpace;

    });

    // Extracting animations from then model.
    const {actions} = useAnimations(model.animations, model.scene);

    //  Playing the animations.
    useEffect(()=>{

      actions["Take 001"].play();

    },[actions]);


    // Loading the textures of dog model.
    const[normalMap, sampleMatCap] = (useTexture(["/dog_normals.jpg", "/matcap/mat-2.png"])).map((texture)=>{
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    });

    // Loading the textures of branches.
    const[branchMap, branchNormalMap] = (useTexture(["/branches_diffuse.jpeg", "branches_normals.jpeg"])).map((texture)=>{
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    });

    //  Loading the matcap textures.
    const[
      mat1,
      mat2,
      mat3,
      mat4,
      mat5,
      mat6,
      mat7,
      mat8,
      mat9,
      mat10,
      mat11,
      mat12,
      mat13,
      mat14,
      mat15,
      mat16,
      mat17,
      mat18,
      mat19,
      mat20,
    ] = (useTexture([
      "/matcap/mat-1.png",
      "/matcap/mat-2.png",
      "/matcap/mat-3.png",
      "/matcap/mat-4.png",
      "/matcap/mat-5.png",
      "/matcap/mat-6.png",
      "/matcap/mat-7.png",
      "/matcap/mat-8.png",
      "/matcap/mat-9.png",
      "/matcap/mat-10.png",
      "/matcap/mat-11.png",
      "/matcap/mat-12.png",
      "/matcap/mat-13.png",
      "/matcap/mat-14.png",
      "/matcap/mat-15.png",
      "/matcap/mat-16.png",
      "/matcap/mat-17.png",
      "/matcap/mat-18.png",
      "/matcap/mat-19.png",
      "/matcap/mat-20.png",
    ])).map((texture)=>{
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    });

    const material = useRef({
      uMatcap1 : {value : mat19},
      uMatcap2: {value : mat2},
      uProgress: {value : 1.0},
    });

    //  Creating the material for dog using the textures loaded previously.
    const dogMaterial = new THREE.MeshMatcapMaterial({
        normalMap : normalMap,
        matcap: sampleMatCap
    });

    //  Creating the material for branches using the textures loaded previously.
    const branchMaterial = new THREE.MeshMatcapMaterial({
      normalMap: branchNormalMap,
      map: branchMap,
    });

     function onBeforeCompile(shader) {
        shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
        shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
        shader.uniforms.uProgress = material.current.uProgress

        // Store reference to shader uniforms for GSAP animation

        shader.fragmentShader = shader.fragmentShader.replace(
            "void main() {",
            `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
        )

        shader.fragmentShader = shader.fragmentShader.replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
        )
    }

    dogMaterial.onBeforeCompile = onBeforeCompile;

    
    // Applying the materials to the dog and branches inside the model.
    model.scene.traverse((child)=>{
      if(child.name.includes("DOG"))
      {
        child.material = dogMaterial;
      }
      else
      {
        child.material = branchMaterial;
      }
    });

    // Animating the dog model using GSAP AND ScrollTrigger.
    const dogModel = useRef(model);

    //  Making the timelines for animating the dog model.
    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: "section-1",
          endTrigger: "section-4",
          start:"top top",
          end: "bottom bottom",
          scrub:true,
        }
      });

      tl.to(dogModel.current.scene.position,{
        z:"-=0.75",
        y:"+=0.1",
      }).to(dogModel.current.scene.rotation,{
        x:`+=${Math.PI/15}`,
      }).to(dogModel.current.scene.rotation,{
        y:`-=${Math.PI}`,
      },"third").to(dogModel.current.scene.position,{
        x:"-=0.5",
        z:"+=0.6",
        y:"-=0.1",
      },"third")
    },[]);

    useEffect(()=>{

      document.querySelector(`.title[my-title = "tomorrow"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat19;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "navypier"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat8;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "msichicago"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat9;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "phone"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat12;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "kikk"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat10;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "kennedy"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat8;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.title[my-title = "opera"]`).addEventListener("mouseenter",()=>{

        material.current.uMatcap1.value = mat13;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

       document.querySelector(`.titles`).addEventListener("mouseleave",()=>{

        material.current.uMatcap1.value = mat2;

        gsap.to(material.current.uProgress,{
          value: 0.0,
          duration: 0.3,
          onComplete: () =>{
            material.current.uMatcap2.value = material.current.uMatcap1.value
            material.current.uProgress.value = 1.0
          }
        })
      });

    },[]);

  return (
      <>
        <primitive object={model.scene} position={[0.25,-0.55,0]} rotation = {[0, Math.PI/3.9, 0]}/>
        <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10} />
      </>
  )
}

export default Dog


/* =============== Notes ====================

1. useGLTF is a model that helps us to load .glb models in our website.
2. <primitive/> is used to show the scene on ui.
3. The model is of meshStandard material so we have to add light to show it.
4. useTexture is used to apply texture on the model.
5. traverse is used to travel every for object in the scene.
6. toneMapping and outputColorSpace is used to improve color quality.
7. normalMap is used for texture.
8. matCap is used for texture color.
9. useAnimation is used to extract animation from the model.
10. GSAP is a animation library in which we animate our website soomthly and easily.
11. GSAP has a plugin called scrollTrigger.
12. To animate anything during the user scroll then we use scrollTrigger.
13. timeline is used to perform animations based on time.
14. onBeforeCompile is used to edit the code of vertex shader and fragment shader.
*/