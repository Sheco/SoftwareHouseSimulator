export interface Skill {
  id: string,
  name: string,
  category: string
  mental_health: number,
  physical_health: number,
}
export interface CharacterSkill {
  base: Skill,
  affinity: number,
  level: number,
}

export interface Character {
    name: string,
    description: string,
    max_mental_health: number,
    max_physical_health: number,
    mental_health: number,
    physical_health: number,
    time: number,
    skills: CharacterSkill[]
}

/* Base project interfaces */
export interface Project {
  name: string,
  description: string,
  requirements: ProjectRequirementOptions[]
}

export interface ProjectRequirementOptions {
  name: string,
  options: ProjectRequirement[],
  progress?: number,
}

export interface ProjectRequirement {
  skill: Skill,
  total: number,
  progress?: number,
  character_skill?: CharacterSkill,
}

/* Card interfaces */
export interface Action {
  name: string,
  category: string,
}

export interface ActiveAction extends Action{
  skills: CharacterSkill[],
}