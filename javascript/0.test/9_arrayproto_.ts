const hongx = { id: 1, name: "Hong", dept: "Server" };
const kimx = { id: 2, name: "Kim", dept: "Server" };
const leex = { id: 3, name: "Lee", dept: "Client" };
const users = [hongx, leex, kimx];

type PropType = string | number | symbol;
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
    rejectBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
    findBy<P extends keyof T>(prop: P, value: T[P]): T;
    sortBy<P extends keyof T | `${keyof T & string}:${"asc" | "desc"}`>(
      prop: P
    ): T[];
    groupBy<GF extends (a: T) => PropType>(gfn: GF): Record<PropType, T[]>;
  }
}

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function <T, P extends keyof T>(
  prop: P,
  value: T[P],
  isIncludes = false
) {
  if (isIncludes) {
    return this.filter(
      (a: T) =>
        Array.isArray(a[prop]) ||
        (typeof a[prop] === "string" &&
          typeof value === "string" &&
          a[prop]?.includes(value))
    );
  }

  return this.filter((a) => a[prop] === value);
};

type HasIncludes<T> = {
  includes(searchElement: T, fromIndex?: number): boolean;
};

const hasIncludes = <T>(p: any, v: T): p is HasIncludes<T> =>
  Array.isArray(p) || (typeof p === "string" && typeof v === "string");

Array.prototype.rejectBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P],
  isIncludes = false
) {
  return this.filter(
    isIncludes
      ? (a) => hasIncludes(a[prop], value) && !a[prop].includes(value)
      : (a) => a[prop] !== value
  );
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function <
  T,
  P extends keyof T | `${keyof T & string}:${"asc" | "desc"}`
>(prop: P) {
  const [key, direction = "asc"] = String(prop).split(":") as [
    keyof T,
    "desc" | "asc"
  ];
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

Array.prototype.groupBy = function <T, GF extends (a: T) => PropType>(gfn: GF) {
  const ret: Record<PropType, T[]> = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};
/*
Server: [
  { id: 1, name: 'Hong', dept: 'Server' },
  { id: 2, name: 'Kim', dept: 'Server' },
],
Client: [
  { id: 3, name: 'Lee', dept: 'Client' }
],
*/

Object.defineProperties(Array.prototype, {
  firstObject: {
    get<T>(this: T[]) {
      return this[0];
    },
    set<T>(this: T[], value: T) {
      this[0] = value;
    },
  },
  lastObject: {
    get<T>(this: T[]) {
      return this[this.length - 1];
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

export {};
