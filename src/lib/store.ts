import { writable } from 'svelte/store'
import type { Character, Project } from './types'

export let character = writable(null as Character)
export let project = writable(null as Project)
