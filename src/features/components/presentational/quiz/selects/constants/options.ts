export const PROGRAMING_LANGUAGES = [
  'C',
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'PHP',
  'Ruby',
  'Swift',
  'Objective-C',
  'Go',
  'Kotlin',
  'TypeScript',
  'Rust',
  'Perl',
  'Lua',
  'Scala',
  'Haskell',
  'R',
  'Elixir',
] as const

export type ProgramingLanguage = (typeof PROGRAMING_LANGUAGES)[number]

export type ProgramingLanguageOption = ProgramingLanguage | null
