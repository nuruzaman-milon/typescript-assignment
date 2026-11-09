const multiplyValue = (value:number, multiplier = 2) : number => {
    if(multiplier === 0) return 0;
    const result = value * multiplier;
    return result;
}

const processInput = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    } else if (typeof value === 'number') {
        return value * 10;
    }else{
        return value ? "Active" : "Inactive";
    }
}

const formatCoordinate = (coordinate: readonly [latitude: number, longitude: number, locationName: string]) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
   return arrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses:Course[], minStudents:number) => {
    const filterPopularCourses = courses.filter((course:Course) => course.isPublished && course.students >= minStudents);
    return filterPopularCourses;
}

const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map(item => item[key]);
};

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};

