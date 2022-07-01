export const CourseTypes = {
  Turf: 'turf',
  Dirt: 'dirt',
  Jump: 'jump',
} as const;

export type CourseType = typeof CourseTypes[keyof typeof CourseTypes];
