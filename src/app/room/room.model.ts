export class Room {
    description: string;
    roomno: string;


    constructor(description: string, roomno: string) {
        this.description = description;
        this.roomno = roomno;
        
    }

    domain(): string | null{
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.roomno.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}