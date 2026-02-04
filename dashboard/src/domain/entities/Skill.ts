export class Skill {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly category: string,
        public readonly tags: string[],
        public readonly triggers: string[] = [],
        public readonly body: string = '',
        public readonly filePath: string = ''
    ) { }
}
