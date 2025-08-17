const hongx = { id: 1, name: "Hong", dept: "Server" };
const kimx = { id: 2, name: "Kim", dept: "Server" };
const leex = { id: 3, name: "Lee", dept: "Client" };
const users = [hongx, leex, kimx];

declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy<P extends keyof T>(prop: P): T[P][];
    filterBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
  }
}

Array.prototype.mapBy = function <T, P extends keyof T>(this: T[], prop: P) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => a[prop]?.includes(value)
    : (a) => a[prop] === value;

  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => !a[prop]?.includes(value)
    : (a) => a[prop] !== value;

  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  // const [key, direction = "asc"] = prop?.split(":");

  const [key, direction = "asc"] = String(prop).split(":") as [
    keyof T,
    "asc" | "desc"
  ];
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

Array.prototype.groupBy = function (gfn) {
  const ret = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this[this.length - 1];
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

console.log("first/last=", users.firstObject.name, users.lastObject.name); // hong/lee
users.firstObject = kimx;
users.lastObject = hongx;
console.log("first/last=", users.firstObject.name, users.lastObject.name); // kim/hong

export {};
