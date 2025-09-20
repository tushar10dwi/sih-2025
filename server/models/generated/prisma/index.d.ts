
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>
/**
 * Model Passion
 * 
 */
export type Passion = $Result.DefaultSelection<Prisma.$PassionPayload>
/**
 * Model SkillOnProfile
 * 
 */
export type SkillOnProfile = $Result.DefaultSelection<Prisma.$SkillOnProfilePayload>
/**
 * Model InterestOnProfile
 * 
 */
export type InterestOnProfile = $Result.DefaultSelection<Prisma.$InterestOnProfilePayload>
/**
 * Model PassionOnProfile
 * 
 */
export type PassionOnProfile = $Result.DefaultSelection<Prisma.$PassionOnProfilePayload>
/**
 * Model AptitudeTest
 * 
 */
export type AptitudeTest = $Result.DefaultSelection<Prisma.$AptitudeTestPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model Degree
 * 
 */
export type Degree = $Result.DefaultSelection<Prisma.$DegreePayload>
/**
 * Model DegreeOnCollege
 * 
 */
export type DegreeOnCollege = $Result.DefaultSelection<Prisma.$DegreeOnCollegePayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model InterestOnCareer
 * 
 */
export type InterestOnCareer = $Result.DefaultSelection<Prisma.$InterestOnCareerPayload>
/**
 * Model SkillOnCareer
 * 
 */
export type SkillOnCareer = $Result.DefaultSelection<Prisma.$SkillOnCareerPayload>
/**
 * Model CareerOnDegree
 * 
 */
export type CareerOnDegree = $Result.DefaultSelection<Prisma.$CareerOnDegreePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passion`: Exposes CRUD operations for the **Passion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passions
    * const passions = await prisma.passion.findMany()
    * ```
    */
  get passion(): Prisma.PassionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillOnProfile`: Exposes CRUD operations for the **SkillOnProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillOnProfiles
    * const skillOnProfiles = await prisma.skillOnProfile.findMany()
    * ```
    */
  get skillOnProfile(): Prisma.SkillOnProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interestOnProfile`: Exposes CRUD operations for the **InterestOnProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterestOnProfiles
    * const interestOnProfiles = await prisma.interestOnProfile.findMany()
    * ```
    */
  get interestOnProfile(): Prisma.InterestOnProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passionOnProfile`: Exposes CRUD operations for the **PassionOnProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PassionOnProfiles
    * const passionOnProfiles = await prisma.passionOnProfile.findMany()
    * ```
    */
  get passionOnProfile(): Prisma.PassionOnProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aptitudeTest`: Exposes CRUD operations for the **AptitudeTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AptitudeTests
    * const aptitudeTests = await prisma.aptitudeTest.findMany()
    * ```
    */
  get aptitudeTest(): Prisma.AptitudeTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.degree`: Exposes CRUD operations for the **Degree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Degrees
    * const degrees = await prisma.degree.findMany()
    * ```
    */
  get degree(): Prisma.DegreeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.degreeOnCollege`: Exposes CRUD operations for the **DegreeOnCollege** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DegreeOnColleges
    * const degreeOnColleges = await prisma.degreeOnCollege.findMany()
    * ```
    */
  get degreeOnCollege(): Prisma.DegreeOnCollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interestOnCareer`: Exposes CRUD operations for the **InterestOnCareer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterestOnCareers
    * const interestOnCareers = await prisma.interestOnCareer.findMany()
    * ```
    */
  get interestOnCareer(): Prisma.InterestOnCareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillOnCareer`: Exposes CRUD operations for the **SkillOnCareer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillOnCareers
    * const skillOnCareers = await prisma.skillOnCareer.findMany()
    * ```
    */
  get skillOnCareer(): Prisma.SkillOnCareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careerOnDegree`: Exposes CRUD operations for the **CareerOnDegree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerOnDegrees
    * const careerOnDegrees = await prisma.careerOnDegree.findMany()
    * ```
    */
  get careerOnDegree(): Prisma.CareerOnDegreeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Skill: 'Skill',
    Interest: 'Interest',
    Passion: 'Passion',
    SkillOnProfile: 'SkillOnProfile',
    InterestOnProfile: 'InterestOnProfile',
    PassionOnProfile: 'PassionOnProfile',
    AptitudeTest: 'AptitudeTest',
    College: 'College',
    Degree: 'Degree',
    DegreeOnCollege: 'DegreeOnCollege',
    Career: 'Career',
    InterestOnCareer: 'InterestOnCareer',
    SkillOnCareer: 'SkillOnCareer',
    CareerOnDegree: 'CareerOnDegree'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "skill" | "interest" | "passion" | "skillOnProfile" | "interestOnProfile" | "passionOnProfile" | "aptitudeTest" | "college" | "degree" | "degreeOnCollege" | "career" | "interestOnCareer" | "skillOnCareer" | "careerOnDegree"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      Passion: {
        payload: Prisma.$PassionPayload<ExtArgs>
        fields: Prisma.PassionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          findFirst: {
            args: Prisma.PassionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          findMany: {
            args: Prisma.PassionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>[]
          }
          create: {
            args: Prisma.PassionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          createMany: {
            args: Prisma.PassionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>[]
          }
          delete: {
            args: Prisma.PassionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          update: {
            args: Prisma.PassionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          deleteMany: {
            args: Prisma.PassionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>[]
          }
          upsert: {
            args: Prisma.PassionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          aggregate: {
            args: Prisma.PassionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassion>
          }
          groupBy: {
            args: Prisma.PassionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassionCountArgs<ExtArgs>
            result: $Utils.Optional<PassionCountAggregateOutputType> | number
          }
        }
      }
      SkillOnProfile: {
        payload: Prisma.$SkillOnProfilePayload<ExtArgs>
        fields: Prisma.SkillOnProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillOnProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillOnProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          findFirst: {
            args: Prisma.SkillOnProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillOnProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          findMany: {
            args: Prisma.SkillOnProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>[]
          }
          create: {
            args: Prisma.SkillOnProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          createMany: {
            args: Prisma.SkillOnProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillOnProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>[]
          }
          delete: {
            args: Prisma.SkillOnProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          update: {
            args: Prisma.SkillOnProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          deleteMany: {
            args: Prisma.SkillOnProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillOnProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillOnProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>[]
          }
          upsert: {
            args: Prisma.SkillOnProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnProfilePayload>
          }
          aggregate: {
            args: Prisma.SkillOnProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillOnProfile>
          }
          groupBy: {
            args: Prisma.SkillOnProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillOnProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillOnProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SkillOnProfileCountAggregateOutputType> | number
          }
        }
      }
      InterestOnProfile: {
        payload: Prisma.$InterestOnProfilePayload<ExtArgs>
        fields: Prisma.InterestOnProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestOnProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestOnProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          findFirst: {
            args: Prisma.InterestOnProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestOnProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          findMany: {
            args: Prisma.InterestOnProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>[]
          }
          create: {
            args: Prisma.InterestOnProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          createMany: {
            args: Prisma.InterestOnProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestOnProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>[]
          }
          delete: {
            args: Prisma.InterestOnProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          update: {
            args: Prisma.InterestOnProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          deleteMany: {
            args: Prisma.InterestOnProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestOnProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestOnProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>[]
          }
          upsert: {
            args: Prisma.InterestOnProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnProfilePayload>
          }
          aggregate: {
            args: Prisma.InterestOnProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterestOnProfile>
          }
          groupBy: {
            args: Prisma.InterestOnProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestOnProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestOnProfileCountArgs<ExtArgs>
            result: $Utils.Optional<InterestOnProfileCountAggregateOutputType> | number
          }
        }
      }
      PassionOnProfile: {
        payload: Prisma.$PassionOnProfilePayload<ExtArgs>
        fields: Prisma.PassionOnProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassionOnProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassionOnProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          findFirst: {
            args: Prisma.PassionOnProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassionOnProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          findMany: {
            args: Prisma.PassionOnProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>[]
          }
          create: {
            args: Prisma.PassionOnProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          createMany: {
            args: Prisma.PassionOnProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassionOnProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>[]
          }
          delete: {
            args: Prisma.PassionOnProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          update: {
            args: Prisma.PassionOnProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          deleteMany: {
            args: Prisma.PassionOnProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassionOnProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassionOnProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>[]
          }
          upsert: {
            args: Prisma.PassionOnProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassionOnProfilePayload>
          }
          aggregate: {
            args: Prisma.PassionOnProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassionOnProfile>
          }
          groupBy: {
            args: Prisma.PassionOnProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassionOnProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassionOnProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PassionOnProfileCountAggregateOutputType> | number
          }
        }
      }
      AptitudeTest: {
        payload: Prisma.$AptitudeTestPayload<ExtArgs>
        fields: Prisma.AptitudeTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AptitudeTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AptitudeTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          findFirst: {
            args: Prisma.AptitudeTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AptitudeTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          findMany: {
            args: Prisma.AptitudeTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          create: {
            args: Prisma.AptitudeTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          createMany: {
            args: Prisma.AptitudeTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AptitudeTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          delete: {
            args: Prisma.AptitudeTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          update: {
            args: Prisma.AptitudeTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          deleteMany: {
            args: Prisma.AptitudeTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AptitudeTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AptitudeTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          upsert: {
            args: Prisma.AptitudeTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          aggregate: {
            args: Prisma.AptitudeTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAptitudeTest>
          }
          groupBy: {
            args: Prisma.AptitudeTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AptitudeTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AptitudeTestCountArgs<ExtArgs>
            result: $Utils.Optional<AptitudeTestCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      Degree: {
        payload: Prisma.$DegreePayload<ExtArgs>
        fields: Prisma.DegreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DegreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          findFirst: {
            args: Prisma.DegreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          findMany: {
            args: Prisma.DegreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>[]
          }
          create: {
            args: Prisma.DegreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          createMany: {
            args: Prisma.DegreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DegreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>[]
          }
          delete: {
            args: Prisma.DegreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          update: {
            args: Prisma.DegreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          deleteMany: {
            args: Prisma.DegreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DegreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DegreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>[]
          }
          upsert: {
            args: Prisma.DegreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          aggregate: {
            args: Prisma.DegreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegree>
          }
          groupBy: {
            args: Prisma.DegreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DegreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DegreeCountArgs<ExtArgs>
            result: $Utils.Optional<DegreeCountAggregateOutputType> | number
          }
        }
      }
      DegreeOnCollege: {
        payload: Prisma.$DegreeOnCollegePayload<ExtArgs>
        fields: Prisma.DegreeOnCollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DegreeOnCollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreeOnCollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          findFirst: {
            args: Prisma.DegreeOnCollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreeOnCollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          findMany: {
            args: Prisma.DegreeOnCollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>[]
          }
          create: {
            args: Prisma.DegreeOnCollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          createMany: {
            args: Prisma.DegreeOnCollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DegreeOnCollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>[]
          }
          delete: {
            args: Prisma.DegreeOnCollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          update: {
            args: Prisma.DegreeOnCollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          deleteMany: {
            args: Prisma.DegreeOnCollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DegreeOnCollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DegreeOnCollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>[]
          }
          upsert: {
            args: Prisma.DegreeOnCollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DegreeOnCollegePayload>
          }
          aggregate: {
            args: Prisma.DegreeOnCollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegreeOnCollege>
          }
          groupBy: {
            args: Prisma.DegreeOnCollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DegreeOnCollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DegreeOnCollegeCountArgs<ExtArgs>
            result: $Utils.Optional<DegreeOnCollegeCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      InterestOnCareer: {
        payload: Prisma.$InterestOnCareerPayload<ExtArgs>
        fields: Prisma.InterestOnCareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestOnCareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestOnCareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          findFirst: {
            args: Prisma.InterestOnCareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestOnCareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          findMany: {
            args: Prisma.InterestOnCareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>[]
          }
          create: {
            args: Prisma.InterestOnCareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          createMany: {
            args: Prisma.InterestOnCareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestOnCareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>[]
          }
          delete: {
            args: Prisma.InterestOnCareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          update: {
            args: Prisma.InterestOnCareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          deleteMany: {
            args: Prisma.InterestOnCareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestOnCareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestOnCareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>[]
          }
          upsert: {
            args: Prisma.InterestOnCareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestOnCareerPayload>
          }
          aggregate: {
            args: Prisma.InterestOnCareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterestOnCareer>
          }
          groupBy: {
            args: Prisma.InterestOnCareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestOnCareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestOnCareerCountArgs<ExtArgs>
            result: $Utils.Optional<InterestOnCareerCountAggregateOutputType> | number
          }
        }
      }
      SkillOnCareer: {
        payload: Prisma.$SkillOnCareerPayload<ExtArgs>
        fields: Prisma.SkillOnCareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillOnCareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillOnCareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          findFirst: {
            args: Prisma.SkillOnCareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillOnCareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          findMany: {
            args: Prisma.SkillOnCareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>[]
          }
          create: {
            args: Prisma.SkillOnCareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          createMany: {
            args: Prisma.SkillOnCareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillOnCareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>[]
          }
          delete: {
            args: Prisma.SkillOnCareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          update: {
            args: Prisma.SkillOnCareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          deleteMany: {
            args: Prisma.SkillOnCareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillOnCareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillOnCareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>[]
          }
          upsert: {
            args: Prisma.SkillOnCareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillOnCareerPayload>
          }
          aggregate: {
            args: Prisma.SkillOnCareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillOnCareer>
          }
          groupBy: {
            args: Prisma.SkillOnCareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillOnCareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillOnCareerCountArgs<ExtArgs>
            result: $Utils.Optional<SkillOnCareerCountAggregateOutputType> | number
          }
        }
      }
      CareerOnDegree: {
        payload: Prisma.$CareerOnDegreePayload<ExtArgs>
        fields: Prisma.CareerOnDegreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerOnDegreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerOnDegreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          findFirst: {
            args: Prisma.CareerOnDegreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerOnDegreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          findMany: {
            args: Prisma.CareerOnDegreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>[]
          }
          create: {
            args: Prisma.CareerOnDegreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          createMany: {
            args: Prisma.CareerOnDegreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerOnDegreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>[]
          }
          delete: {
            args: Prisma.CareerOnDegreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          update: {
            args: Prisma.CareerOnDegreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          deleteMany: {
            args: Prisma.CareerOnDegreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerOnDegreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerOnDegreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>[]
          }
          upsert: {
            args: Prisma.CareerOnDegreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerOnDegreePayload>
          }
          aggregate: {
            args: Prisma.CareerOnDegreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareerOnDegree>
          }
          groupBy: {
            args: Prisma.CareerOnDegreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerOnDegreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerOnDegreeCountArgs<ExtArgs>
            result: $Utils.Optional<CareerOnDegreeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    skill?: SkillOmit
    interest?: InterestOmit
    passion?: PassionOmit
    skillOnProfile?: SkillOnProfileOmit
    interestOnProfile?: InterestOnProfileOmit
    passionOnProfile?: PassionOnProfileOmit
    aptitudeTest?: AptitudeTestOmit
    college?: CollegeOmit
    degree?: DegreeOmit
    degreeOnCollege?: DegreeOnCollegeOmit
    career?: CareerOmit
    interestOnCareer?: InterestOnCareerOmit
    skillOnCareer?: SkillOnCareerOmit
    careerOnDegree?: CareerOnDegreeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    aptitudeTests: number
    skills: number
    interests: number
    passions: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aptitudeTests?: boolean | ProfileCountOutputTypeCountAptitudeTestsArgs
    skills?: boolean | ProfileCountOutputTypeCountSkillsArgs
    interests?: boolean | ProfileCountOutputTypeCountInterestsArgs
    passions?: boolean | ProfileCountOutputTypeCountPassionsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAptitudeTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AptitudeTestWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnProfileWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnProfileWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPassionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassionOnProfileWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
    careers: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
    careers?: boolean | SkillCountOutputTypeCountCareersArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnProfileWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnCareerWhereInput
  }


  /**
   * Count Type InterestCountOutputType
   */

  export type InterestCountOutputType = {
    users: number
    careers: number
  }

  export type InterestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | InterestCountOutputTypeCountUsersArgs
    careers?: boolean | InterestCountOutputTypeCountCareersArgs
  }

  // Custom InputTypes
  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestCountOutputType
     */
    select?: InterestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnProfileWhereInput
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnCareerWhereInput
  }


  /**
   * Count Type PassionCountOutputType
   */

  export type PassionCountOutputType = {
    users: number
  }

  export type PassionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PassionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PassionCountOutputType without action
   */
  export type PassionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionCountOutputType
     */
    select?: PassionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassionCountOutputType without action
   */
  export type PassionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassionOnProfileWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    degrees: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degrees?: boolean | CollegeCountOutputTypeCountDegreesArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountDegreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreeOnCollegeWhereInput
  }


  /**
   * Count Type DegreeCountOutputType
   */

  export type DegreeCountOutputType = {
    careers: number
    colleges: number
  }

  export type DegreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | DegreeCountOutputTypeCountCareersArgs
    colleges?: boolean | DegreeCountOutputTypeCountCollegesArgs
  }

  // Custom InputTypes
  /**
   * DegreeCountOutputType without action
   */
  export type DegreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeCountOutputType
     */
    select?: DegreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DegreeCountOutputType without action
   */
  export type DegreeCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerOnDegreeWhereInput
  }

  /**
   * DegreeCountOutputType without action
   */
  export type DegreeCountOutputTypeCountCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreeOnCollegeWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    skillsRequired: number
    interestRequired: number
    degreesRequired: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillsRequired?: boolean | CareerCountOutputTypeCountSkillsRequiredArgs
    interestRequired?: boolean | CareerCountOutputTypeCountInterestRequiredArgs
    degreesRequired?: boolean | CareerCountOutputTypeCountDegreesRequiredArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountSkillsRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnCareerWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountInterestRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnCareerWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountDegreesRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerOnDegreeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    otp: string | null
    createdAt: Date | null
    hasProfile: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    otp: string | null
    createdAt: Date | null
    hasProfile: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    otp: number
    createdAt: number
    hasProfile: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    otp?: true
    createdAt?: true
    hasProfile?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    otp?: true
    createdAt?: true
    hasProfile?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    otp?: true
    createdAt?: true
    hasProfile?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string | null
    otp: string | null
    createdAt: Date
    hasProfile: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    hasProfile?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    hasProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    hasProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    otp?: boolean
    createdAt?: boolean
    hasProfile?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "otp" | "createdAt" | "hasProfile", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string | null
      otp: string | null
      createdAt: Date
      hasProfile: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly hasProfile: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
    sex: string | null
    state: string | null
    district: string | null
    classLevel: string | null
    category: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
    sex: string | null
    state: string | null
    district: string | null
    classLevel: string | null
    category: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    age: number
    sex: number
    state: number
    district: number
    classLevel: number
    category: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    sex?: true
    state?: true
    district?: true
    classLevel?: true
    category?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    sex?: true
    state?: true
    district?: true
    classLevel?: true
    category?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    age?: true
    sex?: true
    state?: true
    district?: true
    classLevel?: true
    category?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    age: number | null
    sex: string | null
    state: string | null
    district: string | null
    classLevel: string | null
    category: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    age?: boolean
    sex?: boolean
    state?: boolean
    district?: boolean
    classLevel?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    aptitudeTests?: boolean | Profile$aptitudeTestsArgs<ExtArgs>
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    interests?: boolean | Profile$interestsArgs<ExtArgs>
    passions?: boolean | Profile$passionsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    age?: boolean
    sex?: boolean
    state?: boolean
    district?: boolean
    classLevel?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    age?: boolean
    sex?: boolean
    state?: boolean
    district?: boolean
    classLevel?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    age?: boolean
    sex?: boolean
    state?: boolean
    district?: boolean
    classLevel?: boolean
    category?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "age" | "sex" | "state" | "district" | "classLevel" | "category", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    aptitudeTests?: boolean | Profile$aptitudeTestsArgs<ExtArgs>
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    interests?: boolean | Profile$interestsArgs<ExtArgs>
    passions?: boolean | Profile$passionsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      aptitudeTests: Prisma.$AptitudeTestPayload<ExtArgs>[]
      skills: Prisma.$SkillOnProfilePayload<ExtArgs>[]
      interests: Prisma.$InterestOnProfilePayload<ExtArgs>[]
      passions: Prisma.$PassionOnProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      age: number | null
      sex: string | null
      state: string | null
      district: string | null
      classLevel: string | null
      category: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aptitudeTests<T extends Profile$aptitudeTestsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$aptitudeTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Profile$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends Profile$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passions<T extends Profile$passionsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$passionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly sex: FieldRef<"Profile", 'String'>
    readonly state: FieldRef<"Profile", 'String'>
    readonly district: FieldRef<"Profile", 'String'>
    readonly classLevel: FieldRef<"Profile", 'String'>
    readonly category: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.aptitudeTests
   */
  export type Profile$aptitudeTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    where?: AptitudeTestWhereInput
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    cursor?: AptitudeTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * Profile.skills
   */
  export type Profile$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    where?: SkillOnProfileWhereInput
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    cursor?: SkillOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillOnProfileScalarFieldEnum | SkillOnProfileScalarFieldEnum[]
  }

  /**
   * Profile.interests
   */
  export type Profile$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    where?: InterestOnProfileWhereInput
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    cursor?: InterestOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestOnProfileScalarFieldEnum | InterestOnProfileScalarFieldEnum[]
  }

  /**
   * Profile.passions
   */
  export type Profile$passionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    where?: PassionOnProfileWhereInput
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    cursor?: PassionOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassionOnProfileScalarFieldEnum | PassionOnProfileScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Skill$usersArgs<ExtArgs>
    careers?: boolean | Skill$careersArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    careers?: boolean | Skill$careersArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      users: Prisma.$SkillOnProfilePayload<ExtArgs>[]
      careers: Prisma.$SkillOnCareerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Skill$usersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    careers<T extends Skill$careersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    where?: SkillOnProfileWhereInput
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    cursor?: SkillOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillOnProfileScalarFieldEnum | SkillOnProfileScalarFieldEnum[]
  }

  /**
   * Skill.careers
   */
  export type Skill$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    where?: SkillOnCareerWhereInput
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    cursor?: SkillOnCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillOnCareerScalarFieldEnum | SkillOnCareerScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestAvgAggregateOutputType = {
    id: number | null
  }

  export type InterestSumAggregateOutputType = {
    id: number | null
  }

  export type InterestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InterestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InterestAvgAggregateInputType = {
    id?: true
  }

  export type InterestSumAggregateInputType = {
    id?: true
  }

  export type InterestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _avg?: InterestAvgAggregateInputType
    _sum?: InterestSumAggregateInputType
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: number
    name: string
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Interest$usersArgs<ExtArgs>
    careers?: boolean | Interest$careersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Interest$usersArgs<ExtArgs>
    careers?: boolean | Interest$careersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      users: Prisma.$InterestOnProfilePayload<ExtArgs>[]
      careers: Prisma.$InterestOnCareerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interests and returns the data saved in the database.
     * @param {InterestCreateManyAndReturnArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests and returns the data updated in the database.
     * @param {InterestUpdateManyAndReturnArgs} args - Arguments to update many Interests.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterestUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Interest$usersArgs<ExtArgs> = {}>(args?: Subset<T, Interest$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    careers<T extends Interest$careersArgs<ExtArgs> = {}>(args?: Subset<T, Interest$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'Int'>
    readonly name: FieldRef<"Interest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interest createManyAndReturn
   */
  export type InterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest updateManyAndReturn
   */
  export type InterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest.users
   */
  export type Interest$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    where?: InterestOnProfileWhereInput
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    cursor?: InterestOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestOnProfileScalarFieldEnum | InterestOnProfileScalarFieldEnum[]
  }

  /**
   * Interest.careers
   */
  export type Interest$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    where?: InterestOnCareerWhereInput
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    cursor?: InterestOnCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestOnCareerScalarFieldEnum | InterestOnCareerScalarFieldEnum[]
  }

  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


  /**
   * Model Passion
   */

  export type AggregatePassion = {
    _count: PassionCountAggregateOutputType | null
    _avg: PassionAvgAggregateOutputType | null
    _sum: PassionSumAggregateOutputType | null
    _min: PassionMinAggregateOutputType | null
    _max: PassionMaxAggregateOutputType | null
  }

  export type PassionAvgAggregateOutputType = {
    id: number | null
  }

  export type PassionSumAggregateOutputType = {
    id: number | null
  }

  export type PassionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PassionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PassionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PassionAvgAggregateInputType = {
    id?: true
  }

  export type PassionSumAggregateInputType = {
    id?: true
  }

  export type PassionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PassionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PassionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PassionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passion to aggregate.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passions
    **/
    _count?: true | PassionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassionMaxAggregateInputType
  }

  export type GetPassionAggregateType<T extends PassionAggregateArgs> = {
        [P in keyof T & keyof AggregatePassion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassion[P]>
      : GetScalarType<T[P], AggregatePassion[P]>
  }




  export type PassionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassionWhereInput
    orderBy?: PassionOrderByWithAggregationInput | PassionOrderByWithAggregationInput[]
    by: PassionScalarFieldEnum[] | PassionScalarFieldEnum
    having?: PassionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassionCountAggregateInputType | true
    _avg?: PassionAvgAggregateInputType
    _sum?: PassionSumAggregateInputType
    _min?: PassionMinAggregateInputType
    _max?: PassionMaxAggregateInputType
  }

  export type PassionGroupByOutputType = {
    id: number
    name: string
    _count: PassionCountAggregateOutputType | null
    _avg: PassionAvgAggregateOutputType | null
    _sum: PassionSumAggregateOutputType | null
    _min: PassionMinAggregateOutputType | null
    _max: PassionMaxAggregateOutputType | null
  }

  type GetPassionGroupByPayload<T extends PassionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassionGroupByOutputType[P]>
            : GetScalarType<T[P], PassionGroupByOutputType[P]>
        }
      >
    >


  export type PassionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Passion$usersArgs<ExtArgs>
    _count?: boolean | PassionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passion"]>

  export type PassionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["passion"]>

  export type PassionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["passion"]>

  export type PassionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PassionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["passion"]>
  export type PassionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Passion$usersArgs<ExtArgs>
    _count?: boolean | PassionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PassionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PassionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passion"
    objects: {
      users: Prisma.$PassionOnProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["passion"]>
    composites: {}
  }

  type PassionGetPayload<S extends boolean | null | undefined | PassionDefaultArgs> = $Result.GetResult<Prisma.$PassionPayload, S>

  type PassionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassionCountAggregateInputType | true
    }

  export interface PassionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passion'], meta: { name: 'Passion' } }
    /**
     * Find zero or one Passion that matches the filter.
     * @param {PassionFindUniqueArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassionFindUniqueArgs>(args: SelectSubset<T, PassionFindUniqueArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassionFindUniqueOrThrowArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassionFindUniqueOrThrowArgs>(args: SelectSubset<T, PassionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindFirstArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassionFindFirstArgs>(args?: SelectSubset<T, PassionFindFirstArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindFirstOrThrowArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassionFindFirstOrThrowArgs>(args?: SelectSubset<T, PassionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passions
     * const passions = await prisma.passion.findMany()
     * 
     * // Get first 10 Passions
     * const passions = await prisma.passion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passionWithIdOnly = await prisma.passion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassionFindManyArgs>(args?: SelectSubset<T, PassionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passion.
     * @param {PassionCreateArgs} args - Arguments to create a Passion.
     * @example
     * // Create one Passion
     * const Passion = await prisma.passion.create({
     *   data: {
     *     // ... data to create a Passion
     *   }
     * })
     * 
     */
    create<T extends PassionCreateArgs>(args: SelectSubset<T, PassionCreateArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passions.
     * @param {PassionCreateManyArgs} args - Arguments to create many Passions.
     * @example
     * // Create many Passions
     * const passion = await prisma.passion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassionCreateManyArgs>(args?: SelectSubset<T, PassionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passions and returns the data saved in the database.
     * @param {PassionCreateManyAndReturnArgs} args - Arguments to create many Passions.
     * @example
     * // Create many Passions
     * const passion = await prisma.passion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passions and only return the `id`
     * const passionWithIdOnly = await prisma.passion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassionCreateManyAndReturnArgs>(args?: SelectSubset<T, PassionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passion.
     * @param {PassionDeleteArgs} args - Arguments to delete one Passion.
     * @example
     * // Delete one Passion
     * const Passion = await prisma.passion.delete({
     *   where: {
     *     // ... filter to delete one Passion
     *   }
     * })
     * 
     */
    delete<T extends PassionDeleteArgs>(args: SelectSubset<T, PassionDeleteArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passion.
     * @param {PassionUpdateArgs} args - Arguments to update one Passion.
     * @example
     * // Update one Passion
     * const passion = await prisma.passion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassionUpdateArgs>(args: SelectSubset<T, PassionUpdateArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passions.
     * @param {PassionDeleteManyArgs} args - Arguments to filter Passions to delete.
     * @example
     * // Delete a few Passions
     * const { count } = await prisma.passion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassionDeleteManyArgs>(args?: SelectSubset<T, PassionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passions
     * const passion = await prisma.passion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassionUpdateManyArgs>(args: SelectSubset<T, PassionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passions and returns the data updated in the database.
     * @param {PassionUpdateManyAndReturnArgs} args - Arguments to update many Passions.
     * @example
     * // Update many Passions
     * const passion = await prisma.passion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passions and only return the `id`
     * const passionWithIdOnly = await prisma.passion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassionUpdateManyAndReturnArgs>(args: SelectSubset<T, PassionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passion.
     * @param {PassionUpsertArgs} args - Arguments to update or create a Passion.
     * @example
     * // Update or create a Passion
     * const passion = await prisma.passion.upsert({
     *   create: {
     *     // ... data to create a Passion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passion we want to update
     *   }
     * })
     */
    upsert<T extends PassionUpsertArgs>(args: SelectSubset<T, PassionUpsertArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionCountArgs} args - Arguments to filter Passions to count.
     * @example
     * // Count the number of Passions
     * const count = await prisma.passion.count({
     *   where: {
     *     // ... the filter for the Passions we want to count
     *   }
     * })
    **/
    count<T extends PassionCountArgs>(
      args?: Subset<T, PassionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassionAggregateArgs>(args: Subset<T, PassionAggregateArgs>): Prisma.PrismaPromise<GetPassionAggregateType<T>>

    /**
     * Group by Passion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassionGroupByArgs['orderBy'] }
        : { orderBy?: PassionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passion model
   */
  readonly fields: PassionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Passion$usersArgs<ExtArgs> = {}>(args?: Subset<T, Passion$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passion model
   */
  interface PassionFieldRefs {
    readonly id: FieldRef<"Passion", 'Int'>
    readonly name: FieldRef<"Passion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Passion findUnique
   */
  export type PassionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where: PassionWhereUniqueInput
  }

  /**
   * Passion findUniqueOrThrow
   */
  export type PassionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where: PassionWhereUniqueInput
  }

  /**
   * Passion findFirst
   */
  export type PassionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passions.
     */
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }

  /**
   * Passion findFirstOrThrow
   */
  export type PassionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passions.
     */
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }

  /**
   * Passion findMany
   */
  export type PassionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter, which Passions to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }

  /**
   * Passion create
   */
  export type PassionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * The data needed to create a Passion.
     */
    data: XOR<PassionCreateInput, PassionUncheckedCreateInput>
  }

  /**
   * Passion createMany
   */
  export type PassionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passions.
     */
    data: PassionCreateManyInput | PassionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passion createManyAndReturn
   */
  export type PassionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * The data used to create many Passions.
     */
    data: PassionCreateManyInput | PassionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passion update
   */
  export type PassionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * The data needed to update a Passion.
     */
    data: XOR<PassionUpdateInput, PassionUncheckedUpdateInput>
    /**
     * Choose, which Passion to update.
     */
    where: PassionWhereUniqueInput
  }

  /**
   * Passion updateMany
   */
  export type PassionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passions.
     */
    data: XOR<PassionUpdateManyMutationInput, PassionUncheckedUpdateManyInput>
    /**
     * Filter which Passions to update
     */
    where?: PassionWhereInput
    /**
     * Limit how many Passions to update.
     */
    limit?: number
  }

  /**
   * Passion updateManyAndReturn
   */
  export type PassionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * The data used to update Passions.
     */
    data: XOR<PassionUpdateManyMutationInput, PassionUncheckedUpdateManyInput>
    /**
     * Filter which Passions to update
     */
    where?: PassionWhereInput
    /**
     * Limit how many Passions to update.
     */
    limit?: number
  }

  /**
   * Passion upsert
   */
  export type PassionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * The filter to search for the Passion to update in case it exists.
     */
    where: PassionWhereUniqueInput
    /**
     * In case the Passion found by the `where` argument doesn't exist, create a new Passion with this data.
     */
    create: XOR<PassionCreateInput, PassionUncheckedCreateInput>
    /**
     * In case the Passion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassionUpdateInput, PassionUncheckedUpdateInput>
  }

  /**
   * Passion delete
   */
  export type PassionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
    /**
     * Filter which Passion to delete.
     */
    where: PassionWhereUniqueInput
  }

  /**
   * Passion deleteMany
   */
  export type PassionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passions to delete
     */
    where?: PassionWhereInput
    /**
     * Limit how many Passions to delete.
     */
    limit?: number
  }

  /**
   * Passion.users
   */
  export type Passion$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    where?: PassionOnProfileWhereInput
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    cursor?: PassionOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassionOnProfileScalarFieldEnum | PassionOnProfileScalarFieldEnum[]
  }

  /**
   * Passion without action
   */
  export type PassionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passion
     */
    omit?: PassionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionInclude<ExtArgs> | null
  }


  /**
   * Model SkillOnProfile
   */

  export type AggregateSkillOnProfile = {
    _count: SkillOnProfileCountAggregateOutputType | null
    _avg: SkillOnProfileAvgAggregateOutputType | null
    _sum: SkillOnProfileSumAggregateOutputType | null
    _min: SkillOnProfileMinAggregateOutputType | null
    _max: SkillOnProfileMaxAggregateOutputType | null
  }

  export type SkillOnProfileAvgAggregateOutputType = {
    profileId: number | null
    skillId: number | null
  }

  export type SkillOnProfileSumAggregateOutputType = {
    profileId: number | null
    skillId: number | null
  }

  export type SkillOnProfileMinAggregateOutputType = {
    profileId: number | null
    skillId: number | null
  }

  export type SkillOnProfileMaxAggregateOutputType = {
    profileId: number | null
    skillId: number | null
  }

  export type SkillOnProfileCountAggregateOutputType = {
    profileId: number
    skillId: number
    _all: number
  }


  export type SkillOnProfileAvgAggregateInputType = {
    profileId?: true
    skillId?: true
  }

  export type SkillOnProfileSumAggregateInputType = {
    profileId?: true
    skillId?: true
  }

  export type SkillOnProfileMinAggregateInputType = {
    profileId?: true
    skillId?: true
  }

  export type SkillOnProfileMaxAggregateInputType = {
    profileId?: true
    skillId?: true
  }

  export type SkillOnProfileCountAggregateInputType = {
    profileId?: true
    skillId?: true
    _all?: true
  }

  export type SkillOnProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillOnProfile to aggregate.
     */
    where?: SkillOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnProfiles to fetch.
     */
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillOnProfiles
    **/
    _count?: true | SkillOnProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillOnProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillOnProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillOnProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillOnProfileMaxAggregateInputType
  }

  export type GetSkillOnProfileAggregateType<T extends SkillOnProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillOnProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillOnProfile[P]>
      : GetScalarType<T[P], AggregateSkillOnProfile[P]>
  }




  export type SkillOnProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnProfileWhereInput
    orderBy?: SkillOnProfileOrderByWithAggregationInput | SkillOnProfileOrderByWithAggregationInput[]
    by: SkillOnProfileScalarFieldEnum[] | SkillOnProfileScalarFieldEnum
    having?: SkillOnProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillOnProfileCountAggregateInputType | true
    _avg?: SkillOnProfileAvgAggregateInputType
    _sum?: SkillOnProfileSumAggregateInputType
    _min?: SkillOnProfileMinAggregateInputType
    _max?: SkillOnProfileMaxAggregateInputType
  }

  export type SkillOnProfileGroupByOutputType = {
    profileId: number
    skillId: number
    _count: SkillOnProfileCountAggregateOutputType | null
    _avg: SkillOnProfileAvgAggregateOutputType | null
    _sum: SkillOnProfileSumAggregateOutputType | null
    _min: SkillOnProfileMinAggregateOutputType | null
    _max: SkillOnProfileMaxAggregateOutputType | null
  }

  type GetSkillOnProfileGroupByPayload<T extends SkillOnProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillOnProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillOnProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillOnProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SkillOnProfileGroupByOutputType[P]>
        }
      >
    >


  export type SkillOnProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    skillId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnProfile"]>

  export type SkillOnProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    skillId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnProfile"]>

  export type SkillOnProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    skillId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnProfile"]>

  export type SkillOnProfileSelectScalar = {
    profileId?: boolean
    skillId?: boolean
  }

  export type SkillOnProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profileId" | "skillId", ExtArgs["result"]["skillOnProfile"]>
  export type SkillOnProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type SkillOnProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type SkillOnProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $SkillOnProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillOnProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profileId: number
      skillId: number
    }, ExtArgs["result"]["skillOnProfile"]>
    composites: {}
  }

  type SkillOnProfileGetPayload<S extends boolean | null | undefined | SkillOnProfileDefaultArgs> = $Result.GetResult<Prisma.$SkillOnProfilePayload, S>

  type SkillOnProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillOnProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillOnProfileCountAggregateInputType | true
    }

  export interface SkillOnProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillOnProfile'], meta: { name: 'SkillOnProfile' } }
    /**
     * Find zero or one SkillOnProfile that matches the filter.
     * @param {SkillOnProfileFindUniqueArgs} args - Arguments to find a SkillOnProfile
     * @example
     * // Get one SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillOnProfileFindUniqueArgs>(args: SelectSubset<T, SkillOnProfileFindUniqueArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillOnProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillOnProfileFindUniqueOrThrowArgs} args - Arguments to find a SkillOnProfile
     * @example
     * // Get one SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillOnProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillOnProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillOnProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileFindFirstArgs} args - Arguments to find a SkillOnProfile
     * @example
     * // Get one SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillOnProfileFindFirstArgs>(args?: SelectSubset<T, SkillOnProfileFindFirstArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillOnProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileFindFirstOrThrowArgs} args - Arguments to find a SkillOnProfile
     * @example
     * // Get one SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillOnProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillOnProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillOnProfiles
     * const skillOnProfiles = await prisma.skillOnProfile.findMany()
     * 
     * // Get first 10 SkillOnProfiles
     * const skillOnProfiles = await prisma.skillOnProfile.findMany({ take: 10 })
     * 
     * // Only select the `profileId`
     * const skillOnProfileWithProfileIdOnly = await prisma.skillOnProfile.findMany({ select: { profileId: true } })
     * 
     */
    findMany<T extends SkillOnProfileFindManyArgs>(args?: SelectSubset<T, SkillOnProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillOnProfile.
     * @param {SkillOnProfileCreateArgs} args - Arguments to create a SkillOnProfile.
     * @example
     * // Create one SkillOnProfile
     * const SkillOnProfile = await prisma.skillOnProfile.create({
     *   data: {
     *     // ... data to create a SkillOnProfile
     *   }
     * })
     * 
     */
    create<T extends SkillOnProfileCreateArgs>(args: SelectSubset<T, SkillOnProfileCreateArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillOnProfiles.
     * @param {SkillOnProfileCreateManyArgs} args - Arguments to create many SkillOnProfiles.
     * @example
     * // Create many SkillOnProfiles
     * const skillOnProfile = await prisma.skillOnProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillOnProfileCreateManyArgs>(args?: SelectSubset<T, SkillOnProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillOnProfiles and returns the data saved in the database.
     * @param {SkillOnProfileCreateManyAndReturnArgs} args - Arguments to create many SkillOnProfiles.
     * @example
     * // Create many SkillOnProfiles
     * const skillOnProfile = await prisma.skillOnProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillOnProfiles and only return the `profileId`
     * const skillOnProfileWithProfileIdOnly = await prisma.skillOnProfile.createManyAndReturn({
     *   select: { profileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillOnProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillOnProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillOnProfile.
     * @param {SkillOnProfileDeleteArgs} args - Arguments to delete one SkillOnProfile.
     * @example
     * // Delete one SkillOnProfile
     * const SkillOnProfile = await prisma.skillOnProfile.delete({
     *   where: {
     *     // ... filter to delete one SkillOnProfile
     *   }
     * })
     * 
     */
    delete<T extends SkillOnProfileDeleteArgs>(args: SelectSubset<T, SkillOnProfileDeleteArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillOnProfile.
     * @param {SkillOnProfileUpdateArgs} args - Arguments to update one SkillOnProfile.
     * @example
     * // Update one SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillOnProfileUpdateArgs>(args: SelectSubset<T, SkillOnProfileUpdateArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillOnProfiles.
     * @param {SkillOnProfileDeleteManyArgs} args - Arguments to filter SkillOnProfiles to delete.
     * @example
     * // Delete a few SkillOnProfiles
     * const { count } = await prisma.skillOnProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillOnProfileDeleteManyArgs>(args?: SelectSubset<T, SkillOnProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillOnProfiles
     * const skillOnProfile = await prisma.skillOnProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillOnProfileUpdateManyArgs>(args: SelectSubset<T, SkillOnProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillOnProfiles and returns the data updated in the database.
     * @param {SkillOnProfileUpdateManyAndReturnArgs} args - Arguments to update many SkillOnProfiles.
     * @example
     * // Update many SkillOnProfiles
     * const skillOnProfile = await prisma.skillOnProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillOnProfiles and only return the `profileId`
     * const skillOnProfileWithProfileIdOnly = await prisma.skillOnProfile.updateManyAndReturn({
     *   select: { profileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillOnProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillOnProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillOnProfile.
     * @param {SkillOnProfileUpsertArgs} args - Arguments to update or create a SkillOnProfile.
     * @example
     * // Update or create a SkillOnProfile
     * const skillOnProfile = await prisma.skillOnProfile.upsert({
     *   create: {
     *     // ... data to create a SkillOnProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillOnProfile we want to update
     *   }
     * })
     */
    upsert<T extends SkillOnProfileUpsertArgs>(args: SelectSubset<T, SkillOnProfileUpsertArgs<ExtArgs>>): Prisma__SkillOnProfileClient<$Result.GetResult<Prisma.$SkillOnProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileCountArgs} args - Arguments to filter SkillOnProfiles to count.
     * @example
     * // Count the number of SkillOnProfiles
     * const count = await prisma.skillOnProfile.count({
     *   where: {
     *     // ... the filter for the SkillOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends SkillOnProfileCountArgs>(
      args?: Subset<T, SkillOnProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillOnProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillOnProfileAggregateArgs>(args: Subset<T, SkillOnProfileAggregateArgs>): Prisma.PrismaPromise<GetSkillOnProfileAggregateType<T>>

    /**
     * Group by SkillOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillOnProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillOnProfileGroupByArgs['orderBy'] }
        : { orderBy?: SkillOnProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillOnProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillOnProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillOnProfile model
   */
  readonly fields: SkillOnProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillOnProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillOnProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillOnProfile model
   */
  interface SkillOnProfileFieldRefs {
    readonly profileId: FieldRef<"SkillOnProfile", 'Int'>
    readonly skillId: FieldRef<"SkillOnProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SkillOnProfile findUnique
   */
  export type SkillOnProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnProfile to fetch.
     */
    where: SkillOnProfileWhereUniqueInput
  }

  /**
   * SkillOnProfile findUniqueOrThrow
   */
  export type SkillOnProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnProfile to fetch.
     */
    where: SkillOnProfileWhereUniqueInput
  }

  /**
   * SkillOnProfile findFirst
   */
  export type SkillOnProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnProfile to fetch.
     */
    where?: SkillOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnProfiles to fetch.
     */
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillOnProfiles.
     */
    cursor?: SkillOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillOnProfiles.
     */
    distinct?: SkillOnProfileScalarFieldEnum | SkillOnProfileScalarFieldEnum[]
  }

  /**
   * SkillOnProfile findFirstOrThrow
   */
  export type SkillOnProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnProfile to fetch.
     */
    where?: SkillOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnProfiles to fetch.
     */
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillOnProfiles.
     */
    cursor?: SkillOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillOnProfiles.
     */
    distinct?: SkillOnProfileScalarFieldEnum | SkillOnProfileScalarFieldEnum[]
  }

  /**
   * SkillOnProfile findMany
   */
  export type SkillOnProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnProfiles to fetch.
     */
    where?: SkillOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnProfiles to fetch.
     */
    orderBy?: SkillOnProfileOrderByWithRelationInput | SkillOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillOnProfiles.
     */
    cursor?: SkillOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnProfiles.
     */
    skip?: number
    distinct?: SkillOnProfileScalarFieldEnum | SkillOnProfileScalarFieldEnum[]
  }

  /**
   * SkillOnProfile create
   */
  export type SkillOnProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillOnProfile.
     */
    data: XOR<SkillOnProfileCreateInput, SkillOnProfileUncheckedCreateInput>
  }

  /**
   * SkillOnProfile createMany
   */
  export type SkillOnProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillOnProfiles.
     */
    data: SkillOnProfileCreateManyInput | SkillOnProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillOnProfile createManyAndReturn
   */
  export type SkillOnProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SkillOnProfiles.
     */
    data: SkillOnProfileCreateManyInput | SkillOnProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillOnProfile update
   */
  export type SkillOnProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillOnProfile.
     */
    data: XOR<SkillOnProfileUpdateInput, SkillOnProfileUncheckedUpdateInput>
    /**
     * Choose, which SkillOnProfile to update.
     */
    where: SkillOnProfileWhereUniqueInput
  }

  /**
   * SkillOnProfile updateMany
   */
  export type SkillOnProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillOnProfiles.
     */
    data: XOR<SkillOnProfileUpdateManyMutationInput, SkillOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which SkillOnProfiles to update
     */
    where?: SkillOnProfileWhereInput
    /**
     * Limit how many SkillOnProfiles to update.
     */
    limit?: number
  }

  /**
   * SkillOnProfile updateManyAndReturn
   */
  export type SkillOnProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * The data used to update SkillOnProfiles.
     */
    data: XOR<SkillOnProfileUpdateManyMutationInput, SkillOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which SkillOnProfiles to update
     */
    where?: SkillOnProfileWhereInput
    /**
     * Limit how many SkillOnProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillOnProfile upsert
   */
  export type SkillOnProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillOnProfile to update in case it exists.
     */
    where: SkillOnProfileWhereUniqueInput
    /**
     * In case the SkillOnProfile found by the `where` argument doesn't exist, create a new SkillOnProfile with this data.
     */
    create: XOR<SkillOnProfileCreateInput, SkillOnProfileUncheckedCreateInput>
    /**
     * In case the SkillOnProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillOnProfileUpdateInput, SkillOnProfileUncheckedUpdateInput>
  }

  /**
   * SkillOnProfile delete
   */
  export type SkillOnProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
    /**
     * Filter which SkillOnProfile to delete.
     */
    where: SkillOnProfileWhereUniqueInput
  }

  /**
   * SkillOnProfile deleteMany
   */
  export type SkillOnProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillOnProfiles to delete
     */
    where?: SkillOnProfileWhereInput
    /**
     * Limit how many SkillOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * SkillOnProfile without action
   */
  export type SkillOnProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnProfile
     */
    select?: SkillOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnProfile
     */
    omit?: SkillOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnProfileInclude<ExtArgs> | null
  }


  /**
   * Model InterestOnProfile
   */

  export type AggregateInterestOnProfile = {
    _count: InterestOnProfileCountAggregateOutputType | null
    _avg: InterestOnProfileAvgAggregateOutputType | null
    _sum: InterestOnProfileSumAggregateOutputType | null
    _min: InterestOnProfileMinAggregateOutputType | null
    _max: InterestOnProfileMaxAggregateOutputType | null
  }

  export type InterestOnProfileAvgAggregateOutputType = {
    profileId: number | null
    interestId: number | null
  }

  export type InterestOnProfileSumAggregateOutputType = {
    profileId: number | null
    interestId: number | null
  }

  export type InterestOnProfileMinAggregateOutputType = {
    profileId: number | null
    interestId: number | null
  }

  export type InterestOnProfileMaxAggregateOutputType = {
    profileId: number | null
    interestId: number | null
  }

  export type InterestOnProfileCountAggregateOutputType = {
    profileId: number
    interestId: number
    _all: number
  }


  export type InterestOnProfileAvgAggregateInputType = {
    profileId?: true
    interestId?: true
  }

  export type InterestOnProfileSumAggregateInputType = {
    profileId?: true
    interestId?: true
  }

  export type InterestOnProfileMinAggregateInputType = {
    profileId?: true
    interestId?: true
  }

  export type InterestOnProfileMaxAggregateInputType = {
    profileId?: true
    interestId?: true
  }

  export type InterestOnProfileCountAggregateInputType = {
    profileId?: true
    interestId?: true
    _all?: true
  }

  export type InterestOnProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestOnProfile to aggregate.
     */
    where?: InterestOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnProfiles to fetch.
     */
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterestOnProfiles
    **/
    _count?: true | InterestOnProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestOnProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestOnProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestOnProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestOnProfileMaxAggregateInputType
  }

  export type GetInterestOnProfileAggregateType<T extends InterestOnProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInterestOnProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterestOnProfile[P]>
      : GetScalarType<T[P], AggregateInterestOnProfile[P]>
  }




  export type InterestOnProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnProfileWhereInput
    orderBy?: InterestOnProfileOrderByWithAggregationInput | InterestOnProfileOrderByWithAggregationInput[]
    by: InterestOnProfileScalarFieldEnum[] | InterestOnProfileScalarFieldEnum
    having?: InterestOnProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestOnProfileCountAggregateInputType | true
    _avg?: InterestOnProfileAvgAggregateInputType
    _sum?: InterestOnProfileSumAggregateInputType
    _min?: InterestOnProfileMinAggregateInputType
    _max?: InterestOnProfileMaxAggregateInputType
  }

  export type InterestOnProfileGroupByOutputType = {
    profileId: number
    interestId: number
    _count: InterestOnProfileCountAggregateOutputType | null
    _avg: InterestOnProfileAvgAggregateOutputType | null
    _sum: InterestOnProfileSumAggregateOutputType | null
    _min: InterestOnProfileMinAggregateOutputType | null
    _max: InterestOnProfileMaxAggregateOutputType | null
  }

  type GetInterestOnProfileGroupByPayload<T extends InterestOnProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestOnProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestOnProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestOnProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InterestOnProfileGroupByOutputType[P]>
        }
      >
    >


  export type InterestOnProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    interestId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnProfile"]>

  export type InterestOnProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    interestId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnProfile"]>

  export type InterestOnProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    interestId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnProfile"]>

  export type InterestOnProfileSelectScalar = {
    profileId?: boolean
    interestId?: boolean
  }

  export type InterestOnProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profileId" | "interestId", ExtArgs["result"]["interestOnProfile"]>
  export type InterestOnProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }
  export type InterestOnProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }
  export type InterestOnProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }

  export type $InterestOnProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterestOnProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      interest: Prisma.$InterestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profileId: number
      interestId: number
    }, ExtArgs["result"]["interestOnProfile"]>
    composites: {}
  }

  type InterestOnProfileGetPayload<S extends boolean | null | undefined | InterestOnProfileDefaultArgs> = $Result.GetResult<Prisma.$InterestOnProfilePayload, S>

  type InterestOnProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestOnProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestOnProfileCountAggregateInputType | true
    }

  export interface InterestOnProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterestOnProfile'], meta: { name: 'InterestOnProfile' } }
    /**
     * Find zero or one InterestOnProfile that matches the filter.
     * @param {InterestOnProfileFindUniqueArgs} args - Arguments to find a InterestOnProfile
     * @example
     * // Get one InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestOnProfileFindUniqueArgs>(args: SelectSubset<T, InterestOnProfileFindUniqueArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterestOnProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestOnProfileFindUniqueOrThrowArgs} args - Arguments to find a InterestOnProfile
     * @example
     * // Get one InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestOnProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestOnProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestOnProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileFindFirstArgs} args - Arguments to find a InterestOnProfile
     * @example
     * // Get one InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestOnProfileFindFirstArgs>(args?: SelectSubset<T, InterestOnProfileFindFirstArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestOnProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileFindFirstOrThrowArgs} args - Arguments to find a InterestOnProfile
     * @example
     * // Get one InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestOnProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestOnProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterestOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterestOnProfiles
     * const interestOnProfiles = await prisma.interestOnProfile.findMany()
     * 
     * // Get first 10 InterestOnProfiles
     * const interestOnProfiles = await prisma.interestOnProfile.findMany({ take: 10 })
     * 
     * // Only select the `profileId`
     * const interestOnProfileWithProfileIdOnly = await prisma.interestOnProfile.findMany({ select: { profileId: true } })
     * 
     */
    findMany<T extends InterestOnProfileFindManyArgs>(args?: SelectSubset<T, InterestOnProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterestOnProfile.
     * @param {InterestOnProfileCreateArgs} args - Arguments to create a InterestOnProfile.
     * @example
     * // Create one InterestOnProfile
     * const InterestOnProfile = await prisma.interestOnProfile.create({
     *   data: {
     *     // ... data to create a InterestOnProfile
     *   }
     * })
     * 
     */
    create<T extends InterestOnProfileCreateArgs>(args: SelectSubset<T, InterestOnProfileCreateArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterestOnProfiles.
     * @param {InterestOnProfileCreateManyArgs} args - Arguments to create many InterestOnProfiles.
     * @example
     * // Create many InterestOnProfiles
     * const interestOnProfile = await prisma.interestOnProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestOnProfileCreateManyArgs>(args?: SelectSubset<T, InterestOnProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterestOnProfiles and returns the data saved in the database.
     * @param {InterestOnProfileCreateManyAndReturnArgs} args - Arguments to create many InterestOnProfiles.
     * @example
     * // Create many InterestOnProfiles
     * const interestOnProfile = await prisma.interestOnProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterestOnProfiles and only return the `profileId`
     * const interestOnProfileWithProfileIdOnly = await prisma.interestOnProfile.createManyAndReturn({
     *   select: { profileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestOnProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestOnProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterestOnProfile.
     * @param {InterestOnProfileDeleteArgs} args - Arguments to delete one InterestOnProfile.
     * @example
     * // Delete one InterestOnProfile
     * const InterestOnProfile = await prisma.interestOnProfile.delete({
     *   where: {
     *     // ... filter to delete one InterestOnProfile
     *   }
     * })
     * 
     */
    delete<T extends InterestOnProfileDeleteArgs>(args: SelectSubset<T, InterestOnProfileDeleteArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterestOnProfile.
     * @param {InterestOnProfileUpdateArgs} args - Arguments to update one InterestOnProfile.
     * @example
     * // Update one InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestOnProfileUpdateArgs>(args: SelectSubset<T, InterestOnProfileUpdateArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterestOnProfiles.
     * @param {InterestOnProfileDeleteManyArgs} args - Arguments to filter InterestOnProfiles to delete.
     * @example
     * // Delete a few InterestOnProfiles
     * const { count } = await prisma.interestOnProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestOnProfileDeleteManyArgs>(args?: SelectSubset<T, InterestOnProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterestOnProfiles
     * const interestOnProfile = await prisma.interestOnProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestOnProfileUpdateManyArgs>(args: SelectSubset<T, InterestOnProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestOnProfiles and returns the data updated in the database.
     * @param {InterestOnProfileUpdateManyAndReturnArgs} args - Arguments to update many InterestOnProfiles.
     * @example
     * // Update many InterestOnProfiles
     * const interestOnProfile = await prisma.interestOnProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterestOnProfiles and only return the `profileId`
     * const interestOnProfileWithProfileIdOnly = await prisma.interestOnProfile.updateManyAndReturn({
     *   select: { profileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterestOnProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestOnProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterestOnProfile.
     * @param {InterestOnProfileUpsertArgs} args - Arguments to update or create a InterestOnProfile.
     * @example
     * // Update or create a InterestOnProfile
     * const interestOnProfile = await prisma.interestOnProfile.upsert({
     *   create: {
     *     // ... data to create a InterestOnProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterestOnProfile we want to update
     *   }
     * })
     */
    upsert<T extends InterestOnProfileUpsertArgs>(args: SelectSubset<T, InterestOnProfileUpsertArgs<ExtArgs>>): Prisma__InterestOnProfileClient<$Result.GetResult<Prisma.$InterestOnProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterestOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileCountArgs} args - Arguments to filter InterestOnProfiles to count.
     * @example
     * // Count the number of InterestOnProfiles
     * const count = await prisma.interestOnProfile.count({
     *   where: {
     *     // ... the filter for the InterestOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends InterestOnProfileCountArgs>(
      args?: Subset<T, InterestOnProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestOnProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterestOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestOnProfileAggregateArgs>(args: Subset<T, InterestOnProfileAggregateArgs>): Prisma.PrismaPromise<GetInterestOnProfileAggregateType<T>>

    /**
     * Group by InterestOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestOnProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestOnProfileGroupByArgs['orderBy'] }
        : { orderBy?: InterestOnProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestOnProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestOnProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterestOnProfile model
   */
  readonly fields: InterestOnProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterestOnProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestOnProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestDefaultArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterestOnProfile model
   */
  interface InterestOnProfileFieldRefs {
    readonly profileId: FieldRef<"InterestOnProfile", 'Int'>
    readonly interestId: FieldRef<"InterestOnProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InterestOnProfile findUnique
   */
  export type InterestOnProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnProfile to fetch.
     */
    where: InterestOnProfileWhereUniqueInput
  }

  /**
   * InterestOnProfile findUniqueOrThrow
   */
  export type InterestOnProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnProfile to fetch.
     */
    where: InterestOnProfileWhereUniqueInput
  }

  /**
   * InterestOnProfile findFirst
   */
  export type InterestOnProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnProfile to fetch.
     */
    where?: InterestOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnProfiles to fetch.
     */
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestOnProfiles.
     */
    cursor?: InterestOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestOnProfiles.
     */
    distinct?: InterestOnProfileScalarFieldEnum | InterestOnProfileScalarFieldEnum[]
  }

  /**
   * InterestOnProfile findFirstOrThrow
   */
  export type InterestOnProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnProfile to fetch.
     */
    where?: InterestOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnProfiles to fetch.
     */
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestOnProfiles.
     */
    cursor?: InterestOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestOnProfiles.
     */
    distinct?: InterestOnProfileScalarFieldEnum | InterestOnProfileScalarFieldEnum[]
  }

  /**
   * InterestOnProfile findMany
   */
  export type InterestOnProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnProfiles to fetch.
     */
    where?: InterestOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnProfiles to fetch.
     */
    orderBy?: InterestOnProfileOrderByWithRelationInput | InterestOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterestOnProfiles.
     */
    cursor?: InterestOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnProfiles.
     */
    skip?: number
    distinct?: InterestOnProfileScalarFieldEnum | InterestOnProfileScalarFieldEnum[]
  }

  /**
   * InterestOnProfile create
   */
  export type InterestOnProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a InterestOnProfile.
     */
    data: XOR<InterestOnProfileCreateInput, InterestOnProfileUncheckedCreateInput>
  }

  /**
   * InterestOnProfile createMany
   */
  export type InterestOnProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterestOnProfiles.
     */
    data: InterestOnProfileCreateManyInput | InterestOnProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterestOnProfile createManyAndReturn
   */
  export type InterestOnProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * The data used to create many InterestOnProfiles.
     */
    data: InterestOnProfileCreateManyInput | InterestOnProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestOnProfile update
   */
  export type InterestOnProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a InterestOnProfile.
     */
    data: XOR<InterestOnProfileUpdateInput, InterestOnProfileUncheckedUpdateInput>
    /**
     * Choose, which InterestOnProfile to update.
     */
    where: InterestOnProfileWhereUniqueInput
  }

  /**
   * InterestOnProfile updateMany
   */
  export type InterestOnProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterestOnProfiles.
     */
    data: XOR<InterestOnProfileUpdateManyMutationInput, InterestOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which InterestOnProfiles to update
     */
    where?: InterestOnProfileWhereInput
    /**
     * Limit how many InterestOnProfiles to update.
     */
    limit?: number
  }

  /**
   * InterestOnProfile updateManyAndReturn
   */
  export type InterestOnProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * The data used to update InterestOnProfiles.
     */
    data: XOR<InterestOnProfileUpdateManyMutationInput, InterestOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which InterestOnProfiles to update
     */
    where?: InterestOnProfileWhereInput
    /**
     * Limit how many InterestOnProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestOnProfile upsert
   */
  export type InterestOnProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the InterestOnProfile to update in case it exists.
     */
    where: InterestOnProfileWhereUniqueInput
    /**
     * In case the InterestOnProfile found by the `where` argument doesn't exist, create a new InterestOnProfile with this data.
     */
    create: XOR<InterestOnProfileCreateInput, InterestOnProfileUncheckedCreateInput>
    /**
     * In case the InterestOnProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestOnProfileUpdateInput, InterestOnProfileUncheckedUpdateInput>
  }

  /**
   * InterestOnProfile delete
   */
  export type InterestOnProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
    /**
     * Filter which InterestOnProfile to delete.
     */
    where: InterestOnProfileWhereUniqueInput
  }

  /**
   * InterestOnProfile deleteMany
   */
  export type InterestOnProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestOnProfiles to delete
     */
    where?: InterestOnProfileWhereInput
    /**
     * Limit how many InterestOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * InterestOnProfile without action
   */
  export type InterestOnProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnProfile
     */
    select?: InterestOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnProfile
     */
    omit?: InterestOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnProfileInclude<ExtArgs> | null
  }


  /**
   * Model PassionOnProfile
   */

  export type AggregatePassionOnProfile = {
    _count: PassionOnProfileCountAggregateOutputType | null
    _avg: PassionOnProfileAvgAggregateOutputType | null
    _sum: PassionOnProfileSumAggregateOutputType | null
    _min: PassionOnProfileMinAggregateOutputType | null
    _max: PassionOnProfileMaxAggregateOutputType | null
  }

  export type PassionOnProfileAvgAggregateOutputType = {
    profileId: number | null
    passionId: number | null
  }

  export type PassionOnProfileSumAggregateOutputType = {
    profileId: number | null
    passionId: number | null
  }

  export type PassionOnProfileMinAggregateOutputType = {
    profileId: number | null
    passionId: number | null
  }

  export type PassionOnProfileMaxAggregateOutputType = {
    profileId: number | null
    passionId: number | null
  }

  export type PassionOnProfileCountAggregateOutputType = {
    profileId: number
    passionId: number
    _all: number
  }


  export type PassionOnProfileAvgAggregateInputType = {
    profileId?: true
    passionId?: true
  }

  export type PassionOnProfileSumAggregateInputType = {
    profileId?: true
    passionId?: true
  }

  export type PassionOnProfileMinAggregateInputType = {
    profileId?: true
    passionId?: true
  }

  export type PassionOnProfileMaxAggregateInputType = {
    profileId?: true
    passionId?: true
  }

  export type PassionOnProfileCountAggregateInputType = {
    profileId?: true
    passionId?: true
    _all?: true
  }

  export type PassionOnProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassionOnProfile to aggregate.
     */
    where?: PassionOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassionOnProfiles to fetch.
     */
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassionOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassionOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassionOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PassionOnProfiles
    **/
    _count?: true | PassionOnProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassionOnProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassionOnProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassionOnProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassionOnProfileMaxAggregateInputType
  }

  export type GetPassionOnProfileAggregateType<T extends PassionOnProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePassionOnProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassionOnProfile[P]>
      : GetScalarType<T[P], AggregatePassionOnProfile[P]>
  }




  export type PassionOnProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassionOnProfileWhereInput
    orderBy?: PassionOnProfileOrderByWithAggregationInput | PassionOnProfileOrderByWithAggregationInput[]
    by: PassionOnProfileScalarFieldEnum[] | PassionOnProfileScalarFieldEnum
    having?: PassionOnProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassionOnProfileCountAggregateInputType | true
    _avg?: PassionOnProfileAvgAggregateInputType
    _sum?: PassionOnProfileSumAggregateInputType
    _min?: PassionOnProfileMinAggregateInputType
    _max?: PassionOnProfileMaxAggregateInputType
  }

  export type PassionOnProfileGroupByOutputType = {
    profileId: number
    passionId: number
    _count: PassionOnProfileCountAggregateOutputType | null
    _avg: PassionOnProfileAvgAggregateOutputType | null
    _sum: PassionOnProfileSumAggregateOutputType | null
    _min: PassionOnProfileMinAggregateOutputType | null
    _max: PassionOnProfileMaxAggregateOutputType | null
  }

  type GetPassionOnProfileGroupByPayload<T extends PassionOnProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassionOnProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassionOnProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassionOnProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PassionOnProfileGroupByOutputType[P]>
        }
      >
    >


  export type PassionOnProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    passionId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passionOnProfile"]>

  export type PassionOnProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    passionId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passionOnProfile"]>

  export type PassionOnProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profileId?: boolean
    passionId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passionOnProfile"]>

  export type PassionOnProfileSelectScalar = {
    profileId?: boolean
    passionId?: boolean
  }

  export type PassionOnProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profileId" | "passionId", ExtArgs["result"]["passionOnProfile"]>
  export type PassionOnProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }
  export type PassionOnProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }
  export type PassionOnProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    passion?: boolean | PassionDefaultArgs<ExtArgs>
  }

  export type $PassionOnProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PassionOnProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      passion: Prisma.$PassionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profileId: number
      passionId: number
    }, ExtArgs["result"]["passionOnProfile"]>
    composites: {}
  }

  type PassionOnProfileGetPayload<S extends boolean | null | undefined | PassionOnProfileDefaultArgs> = $Result.GetResult<Prisma.$PassionOnProfilePayload, S>

  type PassionOnProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassionOnProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassionOnProfileCountAggregateInputType | true
    }

  export interface PassionOnProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PassionOnProfile'], meta: { name: 'PassionOnProfile' } }
    /**
     * Find zero or one PassionOnProfile that matches the filter.
     * @param {PassionOnProfileFindUniqueArgs} args - Arguments to find a PassionOnProfile
     * @example
     * // Get one PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassionOnProfileFindUniqueArgs>(args: SelectSubset<T, PassionOnProfileFindUniqueArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PassionOnProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassionOnProfileFindUniqueOrThrowArgs} args - Arguments to find a PassionOnProfile
     * @example
     * // Get one PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassionOnProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PassionOnProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassionOnProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileFindFirstArgs} args - Arguments to find a PassionOnProfile
     * @example
     * // Get one PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassionOnProfileFindFirstArgs>(args?: SelectSubset<T, PassionOnProfileFindFirstArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassionOnProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileFindFirstOrThrowArgs} args - Arguments to find a PassionOnProfile
     * @example
     * // Get one PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassionOnProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PassionOnProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PassionOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PassionOnProfiles
     * const passionOnProfiles = await prisma.passionOnProfile.findMany()
     * 
     * // Get first 10 PassionOnProfiles
     * const passionOnProfiles = await prisma.passionOnProfile.findMany({ take: 10 })
     * 
     * // Only select the `profileId`
     * const passionOnProfileWithProfileIdOnly = await prisma.passionOnProfile.findMany({ select: { profileId: true } })
     * 
     */
    findMany<T extends PassionOnProfileFindManyArgs>(args?: SelectSubset<T, PassionOnProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PassionOnProfile.
     * @param {PassionOnProfileCreateArgs} args - Arguments to create a PassionOnProfile.
     * @example
     * // Create one PassionOnProfile
     * const PassionOnProfile = await prisma.passionOnProfile.create({
     *   data: {
     *     // ... data to create a PassionOnProfile
     *   }
     * })
     * 
     */
    create<T extends PassionOnProfileCreateArgs>(args: SelectSubset<T, PassionOnProfileCreateArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PassionOnProfiles.
     * @param {PassionOnProfileCreateManyArgs} args - Arguments to create many PassionOnProfiles.
     * @example
     * // Create many PassionOnProfiles
     * const passionOnProfile = await prisma.passionOnProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassionOnProfileCreateManyArgs>(args?: SelectSubset<T, PassionOnProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PassionOnProfiles and returns the data saved in the database.
     * @param {PassionOnProfileCreateManyAndReturnArgs} args - Arguments to create many PassionOnProfiles.
     * @example
     * // Create many PassionOnProfiles
     * const passionOnProfile = await prisma.passionOnProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PassionOnProfiles and only return the `profileId`
     * const passionOnProfileWithProfileIdOnly = await prisma.passionOnProfile.createManyAndReturn({
     *   select: { profileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassionOnProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PassionOnProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PassionOnProfile.
     * @param {PassionOnProfileDeleteArgs} args - Arguments to delete one PassionOnProfile.
     * @example
     * // Delete one PassionOnProfile
     * const PassionOnProfile = await prisma.passionOnProfile.delete({
     *   where: {
     *     // ... filter to delete one PassionOnProfile
     *   }
     * })
     * 
     */
    delete<T extends PassionOnProfileDeleteArgs>(args: SelectSubset<T, PassionOnProfileDeleteArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PassionOnProfile.
     * @param {PassionOnProfileUpdateArgs} args - Arguments to update one PassionOnProfile.
     * @example
     * // Update one PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassionOnProfileUpdateArgs>(args: SelectSubset<T, PassionOnProfileUpdateArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PassionOnProfiles.
     * @param {PassionOnProfileDeleteManyArgs} args - Arguments to filter PassionOnProfiles to delete.
     * @example
     * // Delete a few PassionOnProfiles
     * const { count } = await prisma.passionOnProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassionOnProfileDeleteManyArgs>(args?: SelectSubset<T, PassionOnProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassionOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PassionOnProfiles
     * const passionOnProfile = await prisma.passionOnProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassionOnProfileUpdateManyArgs>(args: SelectSubset<T, PassionOnProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassionOnProfiles and returns the data updated in the database.
     * @param {PassionOnProfileUpdateManyAndReturnArgs} args - Arguments to update many PassionOnProfiles.
     * @example
     * // Update many PassionOnProfiles
     * const passionOnProfile = await prisma.passionOnProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PassionOnProfiles and only return the `profileId`
     * const passionOnProfileWithProfileIdOnly = await prisma.passionOnProfile.updateManyAndReturn({
     *   select: { profileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassionOnProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PassionOnProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PassionOnProfile.
     * @param {PassionOnProfileUpsertArgs} args - Arguments to update or create a PassionOnProfile.
     * @example
     * // Update or create a PassionOnProfile
     * const passionOnProfile = await prisma.passionOnProfile.upsert({
     *   create: {
     *     // ... data to create a PassionOnProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PassionOnProfile we want to update
     *   }
     * })
     */
    upsert<T extends PassionOnProfileUpsertArgs>(args: SelectSubset<T, PassionOnProfileUpsertArgs<ExtArgs>>): Prisma__PassionOnProfileClient<$Result.GetResult<Prisma.$PassionOnProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PassionOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileCountArgs} args - Arguments to filter PassionOnProfiles to count.
     * @example
     * // Count the number of PassionOnProfiles
     * const count = await prisma.passionOnProfile.count({
     *   where: {
     *     // ... the filter for the PassionOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends PassionOnProfileCountArgs>(
      args?: Subset<T, PassionOnProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassionOnProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PassionOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassionOnProfileAggregateArgs>(args: Subset<T, PassionOnProfileAggregateArgs>): Prisma.PrismaPromise<GetPassionOnProfileAggregateType<T>>

    /**
     * Group by PassionOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionOnProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassionOnProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassionOnProfileGroupByArgs['orderBy'] }
        : { orderBy?: PassionOnProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassionOnProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassionOnProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PassionOnProfile model
   */
  readonly fields: PassionOnProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PassionOnProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassionOnProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passion<T extends PassionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassionDefaultArgs<ExtArgs>>): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PassionOnProfile model
   */
  interface PassionOnProfileFieldRefs {
    readonly profileId: FieldRef<"PassionOnProfile", 'Int'>
    readonly passionId: FieldRef<"PassionOnProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PassionOnProfile findUnique
   */
  export type PassionOnProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which PassionOnProfile to fetch.
     */
    where: PassionOnProfileWhereUniqueInput
  }

  /**
   * PassionOnProfile findUniqueOrThrow
   */
  export type PassionOnProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which PassionOnProfile to fetch.
     */
    where: PassionOnProfileWhereUniqueInput
  }

  /**
   * PassionOnProfile findFirst
   */
  export type PassionOnProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which PassionOnProfile to fetch.
     */
    where?: PassionOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassionOnProfiles to fetch.
     */
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassionOnProfiles.
     */
    cursor?: PassionOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassionOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassionOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassionOnProfiles.
     */
    distinct?: PassionOnProfileScalarFieldEnum | PassionOnProfileScalarFieldEnum[]
  }

  /**
   * PassionOnProfile findFirstOrThrow
   */
  export type PassionOnProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which PassionOnProfile to fetch.
     */
    where?: PassionOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassionOnProfiles to fetch.
     */
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassionOnProfiles.
     */
    cursor?: PassionOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassionOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassionOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassionOnProfiles.
     */
    distinct?: PassionOnProfileScalarFieldEnum | PassionOnProfileScalarFieldEnum[]
  }

  /**
   * PassionOnProfile findMany
   */
  export type PassionOnProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which PassionOnProfiles to fetch.
     */
    where?: PassionOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassionOnProfiles to fetch.
     */
    orderBy?: PassionOnProfileOrderByWithRelationInput | PassionOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PassionOnProfiles.
     */
    cursor?: PassionOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassionOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassionOnProfiles.
     */
    skip?: number
    distinct?: PassionOnProfileScalarFieldEnum | PassionOnProfileScalarFieldEnum[]
  }

  /**
   * PassionOnProfile create
   */
  export type PassionOnProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PassionOnProfile.
     */
    data: XOR<PassionOnProfileCreateInput, PassionOnProfileUncheckedCreateInput>
  }

  /**
   * PassionOnProfile createMany
   */
  export type PassionOnProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PassionOnProfiles.
     */
    data: PassionOnProfileCreateManyInput | PassionOnProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassionOnProfile createManyAndReturn
   */
  export type PassionOnProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PassionOnProfiles.
     */
    data: PassionOnProfileCreateManyInput | PassionOnProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PassionOnProfile update
   */
  export type PassionOnProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PassionOnProfile.
     */
    data: XOR<PassionOnProfileUpdateInput, PassionOnProfileUncheckedUpdateInput>
    /**
     * Choose, which PassionOnProfile to update.
     */
    where: PassionOnProfileWhereUniqueInput
  }

  /**
   * PassionOnProfile updateMany
   */
  export type PassionOnProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PassionOnProfiles.
     */
    data: XOR<PassionOnProfileUpdateManyMutationInput, PassionOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which PassionOnProfiles to update
     */
    where?: PassionOnProfileWhereInput
    /**
     * Limit how many PassionOnProfiles to update.
     */
    limit?: number
  }

  /**
   * PassionOnProfile updateManyAndReturn
   */
  export type PassionOnProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * The data used to update PassionOnProfiles.
     */
    data: XOR<PassionOnProfileUpdateManyMutationInput, PassionOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which PassionOnProfiles to update
     */
    where?: PassionOnProfileWhereInput
    /**
     * Limit how many PassionOnProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PassionOnProfile upsert
   */
  export type PassionOnProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PassionOnProfile to update in case it exists.
     */
    where: PassionOnProfileWhereUniqueInput
    /**
     * In case the PassionOnProfile found by the `where` argument doesn't exist, create a new PassionOnProfile with this data.
     */
    create: XOR<PassionOnProfileCreateInput, PassionOnProfileUncheckedCreateInput>
    /**
     * In case the PassionOnProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassionOnProfileUpdateInput, PassionOnProfileUncheckedUpdateInput>
  }

  /**
   * PassionOnProfile delete
   */
  export type PassionOnProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
    /**
     * Filter which PassionOnProfile to delete.
     */
    where: PassionOnProfileWhereUniqueInput
  }

  /**
   * PassionOnProfile deleteMany
   */
  export type PassionOnProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassionOnProfiles to delete
     */
    where?: PassionOnProfileWhereInput
    /**
     * Limit how many PassionOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * PassionOnProfile without action
   */
  export type PassionOnProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassionOnProfile
     */
    select?: PassionOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassionOnProfile
     */
    omit?: PassionOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassionOnProfileInclude<ExtArgs> | null
  }


  /**
   * Model AptitudeTest
   */

  export type AggregateAptitudeTest = {
    _count: AptitudeTestCountAggregateOutputType | null
    _avg: AptitudeTestAvgAggregateOutputType | null
    _sum: AptitudeTestSumAggregateOutputType | null
    _min: AptitudeTestMinAggregateOutputType | null
    _max: AptitudeTestMaxAggregateOutputType | null
  }

  export type AptitudeTestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    total: number | null
  }

  export type AptitudeTestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    total: number | null
  }

  export type AptitudeTestMinAggregateOutputType = {
    id: number | null
    userId: number | null
    dateTaken: Date | null
    total: number | null
  }

  export type AptitudeTestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    dateTaken: Date | null
    total: number | null
  }

  export type AptitudeTestCountAggregateOutputType = {
    id: number
    userId: number
    dateTaken: number
    scores: number
    total: number
    _all: number
  }


  export type AptitudeTestAvgAggregateInputType = {
    id?: true
    userId?: true
    total?: true
  }

  export type AptitudeTestSumAggregateInputType = {
    id?: true
    userId?: true
    total?: true
  }

  export type AptitudeTestMinAggregateInputType = {
    id?: true
    userId?: true
    dateTaken?: true
    total?: true
  }

  export type AptitudeTestMaxAggregateInputType = {
    id?: true
    userId?: true
    dateTaken?: true
    total?: true
  }

  export type AptitudeTestCountAggregateInputType = {
    id?: true
    userId?: true
    dateTaken?: true
    scores?: true
    total?: true
    _all?: true
  }

  export type AptitudeTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AptitudeTest to aggregate.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AptitudeTests
    **/
    _count?: true | AptitudeTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AptitudeTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AptitudeTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AptitudeTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AptitudeTestMaxAggregateInputType
  }

  export type GetAptitudeTestAggregateType<T extends AptitudeTestAggregateArgs> = {
        [P in keyof T & keyof AggregateAptitudeTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAptitudeTest[P]>
      : GetScalarType<T[P], AggregateAptitudeTest[P]>
  }




  export type AptitudeTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AptitudeTestWhereInput
    orderBy?: AptitudeTestOrderByWithAggregationInput | AptitudeTestOrderByWithAggregationInput[]
    by: AptitudeTestScalarFieldEnum[] | AptitudeTestScalarFieldEnum
    having?: AptitudeTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AptitudeTestCountAggregateInputType | true
    _avg?: AptitudeTestAvgAggregateInputType
    _sum?: AptitudeTestSumAggregateInputType
    _min?: AptitudeTestMinAggregateInputType
    _max?: AptitudeTestMaxAggregateInputType
  }

  export type AptitudeTestGroupByOutputType = {
    id: number
    userId: number
    dateTaken: Date
    scores: JsonValue
    total: number
    _count: AptitudeTestCountAggregateOutputType | null
    _avg: AptitudeTestAvgAggregateOutputType | null
    _sum: AptitudeTestSumAggregateOutputType | null
    _min: AptitudeTestMinAggregateOutputType | null
    _max: AptitudeTestMaxAggregateOutputType | null
  }

  type GetAptitudeTestGroupByPayload<T extends AptitudeTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AptitudeTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AptitudeTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AptitudeTestGroupByOutputType[P]>
            : GetScalarType<T[P], AptitudeTestGroupByOutputType[P]>
        }
      >
    >


  export type AptitudeTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateTaken?: boolean
    scores?: boolean
    total?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateTaken?: boolean
    scores?: boolean
    total?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateTaken?: boolean
    scores?: boolean
    total?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectScalar = {
    id?: boolean
    userId?: boolean
    dateTaken?: boolean
    scores?: boolean
    total?: boolean
  }

  export type AptitudeTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateTaken" | "scores" | "total", ExtArgs["result"]["aptitudeTest"]>
  export type AptitudeTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AptitudeTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AptitudeTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AptitudeTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AptitudeTest"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      dateTaken: Date
      scores: Prisma.JsonValue
      total: number
    }, ExtArgs["result"]["aptitudeTest"]>
    composites: {}
  }

  type AptitudeTestGetPayload<S extends boolean | null | undefined | AptitudeTestDefaultArgs> = $Result.GetResult<Prisma.$AptitudeTestPayload, S>

  type AptitudeTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AptitudeTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AptitudeTestCountAggregateInputType | true
    }

  export interface AptitudeTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AptitudeTest'], meta: { name: 'AptitudeTest' } }
    /**
     * Find zero or one AptitudeTest that matches the filter.
     * @param {AptitudeTestFindUniqueArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AptitudeTestFindUniqueArgs>(args: SelectSubset<T, AptitudeTestFindUniqueArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AptitudeTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AptitudeTestFindUniqueOrThrowArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AptitudeTestFindUniqueOrThrowArgs>(args: SelectSubset<T, AptitudeTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AptitudeTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindFirstArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AptitudeTestFindFirstArgs>(args?: SelectSubset<T, AptitudeTestFindFirstArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AptitudeTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindFirstOrThrowArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AptitudeTestFindFirstOrThrowArgs>(args?: SelectSubset<T, AptitudeTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AptitudeTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AptitudeTests
     * const aptitudeTests = await prisma.aptitudeTest.findMany()
     * 
     * // Get first 10 AptitudeTests
     * const aptitudeTests = await prisma.aptitudeTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AptitudeTestFindManyArgs>(args?: SelectSubset<T, AptitudeTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AptitudeTest.
     * @param {AptitudeTestCreateArgs} args - Arguments to create a AptitudeTest.
     * @example
     * // Create one AptitudeTest
     * const AptitudeTest = await prisma.aptitudeTest.create({
     *   data: {
     *     // ... data to create a AptitudeTest
     *   }
     * })
     * 
     */
    create<T extends AptitudeTestCreateArgs>(args: SelectSubset<T, AptitudeTestCreateArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AptitudeTests.
     * @param {AptitudeTestCreateManyArgs} args - Arguments to create many AptitudeTests.
     * @example
     * // Create many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AptitudeTestCreateManyArgs>(args?: SelectSubset<T, AptitudeTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AptitudeTests and returns the data saved in the database.
     * @param {AptitudeTestCreateManyAndReturnArgs} args - Arguments to create many AptitudeTests.
     * @example
     * // Create many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AptitudeTests and only return the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AptitudeTestCreateManyAndReturnArgs>(args?: SelectSubset<T, AptitudeTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AptitudeTest.
     * @param {AptitudeTestDeleteArgs} args - Arguments to delete one AptitudeTest.
     * @example
     * // Delete one AptitudeTest
     * const AptitudeTest = await prisma.aptitudeTest.delete({
     *   where: {
     *     // ... filter to delete one AptitudeTest
     *   }
     * })
     * 
     */
    delete<T extends AptitudeTestDeleteArgs>(args: SelectSubset<T, AptitudeTestDeleteArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AptitudeTest.
     * @param {AptitudeTestUpdateArgs} args - Arguments to update one AptitudeTest.
     * @example
     * // Update one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AptitudeTestUpdateArgs>(args: SelectSubset<T, AptitudeTestUpdateArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AptitudeTests.
     * @param {AptitudeTestDeleteManyArgs} args - Arguments to filter AptitudeTests to delete.
     * @example
     * // Delete a few AptitudeTests
     * const { count } = await prisma.aptitudeTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AptitudeTestDeleteManyArgs>(args?: SelectSubset<T, AptitudeTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AptitudeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AptitudeTestUpdateManyArgs>(args: SelectSubset<T, AptitudeTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AptitudeTests and returns the data updated in the database.
     * @param {AptitudeTestUpdateManyAndReturnArgs} args - Arguments to update many AptitudeTests.
     * @example
     * // Update many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AptitudeTests and only return the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AptitudeTestUpdateManyAndReturnArgs>(args: SelectSubset<T, AptitudeTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AptitudeTest.
     * @param {AptitudeTestUpsertArgs} args - Arguments to update or create a AptitudeTest.
     * @example
     * // Update or create a AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.upsert({
     *   create: {
     *     // ... data to create a AptitudeTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AptitudeTest we want to update
     *   }
     * })
     */
    upsert<T extends AptitudeTestUpsertArgs>(args: SelectSubset<T, AptitudeTestUpsertArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AptitudeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestCountArgs} args - Arguments to filter AptitudeTests to count.
     * @example
     * // Count the number of AptitudeTests
     * const count = await prisma.aptitudeTest.count({
     *   where: {
     *     // ... the filter for the AptitudeTests we want to count
     *   }
     * })
    **/
    count<T extends AptitudeTestCountArgs>(
      args?: Subset<T, AptitudeTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AptitudeTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AptitudeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AptitudeTestAggregateArgs>(args: Subset<T, AptitudeTestAggregateArgs>): Prisma.PrismaPromise<GetAptitudeTestAggregateType<T>>

    /**
     * Group by AptitudeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AptitudeTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AptitudeTestGroupByArgs['orderBy'] }
        : { orderBy?: AptitudeTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AptitudeTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAptitudeTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AptitudeTest model
   */
  readonly fields: AptitudeTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AptitudeTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AptitudeTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AptitudeTest model
   */
  interface AptitudeTestFieldRefs {
    readonly id: FieldRef<"AptitudeTest", 'Int'>
    readonly userId: FieldRef<"AptitudeTest", 'Int'>
    readonly dateTaken: FieldRef<"AptitudeTest", 'DateTime'>
    readonly scores: FieldRef<"AptitudeTest", 'Json'>
    readonly total: FieldRef<"AptitudeTest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AptitudeTest findUnique
   */
  export type AptitudeTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest findUniqueOrThrow
   */
  export type AptitudeTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest findFirst
   */
  export type AptitudeTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AptitudeTests.
     */
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest findFirstOrThrow
   */
  export type AptitudeTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AptitudeTests.
     */
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest findMany
   */
  export type AptitudeTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter, which AptitudeTests to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest create
   */
  export type AptitudeTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * The data needed to create a AptitudeTest.
     */
    data: XOR<AptitudeTestCreateInput, AptitudeTestUncheckedCreateInput>
  }

  /**
   * AptitudeTest createMany
   */
  export type AptitudeTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AptitudeTests.
     */
    data: AptitudeTestCreateManyInput | AptitudeTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AptitudeTest createManyAndReturn
   */
  export type AptitudeTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data used to create many AptitudeTests.
     */
    data: AptitudeTestCreateManyInput | AptitudeTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AptitudeTest update
   */
  export type AptitudeTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * The data needed to update a AptitudeTest.
     */
    data: XOR<AptitudeTestUpdateInput, AptitudeTestUncheckedUpdateInput>
    /**
     * Choose, which AptitudeTest to update.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest updateMany
   */
  export type AptitudeTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AptitudeTests.
     */
    data: XOR<AptitudeTestUpdateManyMutationInput, AptitudeTestUncheckedUpdateManyInput>
    /**
     * Filter which AptitudeTests to update
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to update.
     */
    limit?: number
  }

  /**
   * AptitudeTest updateManyAndReturn
   */
  export type AptitudeTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data used to update AptitudeTests.
     */
    data: XOR<AptitudeTestUpdateManyMutationInput, AptitudeTestUncheckedUpdateManyInput>
    /**
     * Filter which AptitudeTests to update
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AptitudeTest upsert
   */
  export type AptitudeTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * The filter to search for the AptitudeTest to update in case it exists.
     */
    where: AptitudeTestWhereUniqueInput
    /**
     * In case the AptitudeTest found by the `where` argument doesn't exist, create a new AptitudeTest with this data.
     */
    create: XOR<AptitudeTestCreateInput, AptitudeTestUncheckedCreateInput>
    /**
     * In case the AptitudeTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AptitudeTestUpdateInput, AptitudeTestUncheckedUpdateInput>
  }

  /**
   * AptitudeTest delete
   */
  export type AptitudeTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
    /**
     * Filter which AptitudeTest to delete.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest deleteMany
   */
  export type AptitudeTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AptitudeTests to delete
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to delete.
     */
    limit?: number
  }

  /**
   * AptitudeTest without action
   */
  export type AptitudeTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AptitudeTestInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    id: number | null
  }

  export type CollegeSumAggregateOutputType = {
    id: number | null
  }

  export type CollegeMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    id?: true
  }

  export type CollegeSumAggregateInputType = {
    id?: true
  }

  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: number
    name: string
    location: string
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    degrees?: boolean | College$degreesArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    degrees?: boolean | College$degreesArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      degrees: Prisma.$DegreeOnCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    degrees<T extends College$degreesArgs<ExtArgs> = {}>(args?: Subset<T, College$degreesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'Int'>
    readonly name: FieldRef<"College", 'String'>
    readonly location: FieldRef<"College", 'String'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.degrees
   */
  export type College$degreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    where?: DegreeOnCollegeWhereInput
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    cursor?: DegreeOnCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreeOnCollegeScalarFieldEnum | DegreeOnCollegeScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model Degree
   */

  export type AggregateDegree = {
    _count: DegreeCountAggregateOutputType | null
    _avg: DegreeAvgAggregateOutputType | null
    _sum: DegreeSumAggregateOutputType | null
    _min: DegreeMinAggregateOutputType | null
    _max: DegreeMaxAggregateOutputType | null
  }

  export type DegreeAvgAggregateOutputType = {
    id: number | null
  }

  export type DegreeSumAggregateOutputType = {
    id: number | null
  }

  export type DegreeMinAggregateOutputType = {
    id: number | null
    name: string | null
    field: string | null
  }

  export type DegreeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    field: string | null
  }

  export type DegreeCountAggregateOutputType = {
    id: number
    name: number
    field: number
    _all: number
  }


  export type DegreeAvgAggregateInputType = {
    id?: true
  }

  export type DegreeSumAggregateInputType = {
    id?: true
  }

  export type DegreeMinAggregateInputType = {
    id?: true
    name?: true
    field?: true
  }

  export type DegreeMaxAggregateInputType = {
    id?: true
    name?: true
    field?: true
  }

  export type DegreeCountAggregateInputType = {
    id?: true
    name?: true
    field?: true
    _all?: true
  }

  export type DegreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Degree to aggregate.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Degrees
    **/
    _count?: true | DegreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DegreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DegreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DegreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DegreeMaxAggregateInputType
  }

  export type GetDegreeAggregateType<T extends DegreeAggregateArgs> = {
        [P in keyof T & keyof AggregateDegree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegree[P]>
      : GetScalarType<T[P], AggregateDegree[P]>
  }




  export type DegreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreeWhereInput
    orderBy?: DegreeOrderByWithAggregationInput | DegreeOrderByWithAggregationInput[]
    by: DegreeScalarFieldEnum[] | DegreeScalarFieldEnum
    having?: DegreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DegreeCountAggregateInputType | true
    _avg?: DegreeAvgAggregateInputType
    _sum?: DegreeSumAggregateInputType
    _min?: DegreeMinAggregateInputType
    _max?: DegreeMaxAggregateInputType
  }

  export type DegreeGroupByOutputType = {
    id: number
    name: string
    field: string
    _count: DegreeCountAggregateOutputType | null
    _avg: DegreeAvgAggregateOutputType | null
    _sum: DegreeSumAggregateOutputType | null
    _min: DegreeMinAggregateOutputType | null
    _max: DegreeMaxAggregateOutputType | null
  }

  type GetDegreeGroupByPayload<T extends DegreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DegreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DegreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DegreeGroupByOutputType[P]>
            : GetScalarType<T[P], DegreeGroupByOutputType[P]>
        }
      >
    >


  export type DegreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    field?: boolean
    careers?: boolean | Degree$careersArgs<ExtArgs>
    colleges?: boolean | Degree$collegesArgs<ExtArgs>
    _count?: boolean | DegreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degree"]>

  export type DegreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    field?: boolean
  }, ExtArgs["result"]["degree"]>

  export type DegreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    field?: boolean
  }, ExtArgs["result"]["degree"]>

  export type DegreeSelectScalar = {
    id?: boolean
    name?: boolean
    field?: boolean
  }

  export type DegreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "field", ExtArgs["result"]["degree"]>
  export type DegreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | Degree$careersArgs<ExtArgs>
    colleges?: boolean | Degree$collegesArgs<ExtArgs>
    _count?: boolean | DegreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DegreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DegreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DegreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Degree"
    objects: {
      careers: Prisma.$CareerOnDegreePayload<ExtArgs>[]
      colleges: Prisma.$DegreeOnCollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      field: string
    }, ExtArgs["result"]["degree"]>
    composites: {}
  }

  type DegreeGetPayload<S extends boolean | null | undefined | DegreeDefaultArgs> = $Result.GetResult<Prisma.$DegreePayload, S>

  type DegreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DegreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DegreeCountAggregateInputType | true
    }

  export interface DegreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Degree'], meta: { name: 'Degree' } }
    /**
     * Find zero or one Degree that matches the filter.
     * @param {DegreeFindUniqueArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DegreeFindUniqueArgs>(args: SelectSubset<T, DegreeFindUniqueArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Degree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DegreeFindUniqueOrThrowArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DegreeFindUniqueOrThrowArgs>(args: SelectSubset<T, DegreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindFirstArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DegreeFindFirstArgs>(args?: SelectSubset<T, DegreeFindFirstArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindFirstOrThrowArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DegreeFindFirstOrThrowArgs>(args?: SelectSubset<T, DegreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Degrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Degrees
     * const degrees = await prisma.degree.findMany()
     * 
     * // Get first 10 Degrees
     * const degrees = await prisma.degree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const degreeWithIdOnly = await prisma.degree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DegreeFindManyArgs>(args?: SelectSubset<T, DegreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Degree.
     * @param {DegreeCreateArgs} args - Arguments to create a Degree.
     * @example
     * // Create one Degree
     * const Degree = await prisma.degree.create({
     *   data: {
     *     // ... data to create a Degree
     *   }
     * })
     * 
     */
    create<T extends DegreeCreateArgs>(args: SelectSubset<T, DegreeCreateArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Degrees.
     * @param {DegreeCreateManyArgs} args - Arguments to create many Degrees.
     * @example
     * // Create many Degrees
     * const degree = await prisma.degree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DegreeCreateManyArgs>(args?: SelectSubset<T, DegreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Degrees and returns the data saved in the database.
     * @param {DegreeCreateManyAndReturnArgs} args - Arguments to create many Degrees.
     * @example
     * // Create many Degrees
     * const degree = await prisma.degree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Degrees and only return the `id`
     * const degreeWithIdOnly = await prisma.degree.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DegreeCreateManyAndReturnArgs>(args?: SelectSubset<T, DegreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Degree.
     * @param {DegreeDeleteArgs} args - Arguments to delete one Degree.
     * @example
     * // Delete one Degree
     * const Degree = await prisma.degree.delete({
     *   where: {
     *     // ... filter to delete one Degree
     *   }
     * })
     * 
     */
    delete<T extends DegreeDeleteArgs>(args: SelectSubset<T, DegreeDeleteArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Degree.
     * @param {DegreeUpdateArgs} args - Arguments to update one Degree.
     * @example
     * // Update one Degree
     * const degree = await prisma.degree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DegreeUpdateArgs>(args: SelectSubset<T, DegreeUpdateArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Degrees.
     * @param {DegreeDeleteManyArgs} args - Arguments to filter Degrees to delete.
     * @example
     * // Delete a few Degrees
     * const { count } = await prisma.degree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DegreeDeleteManyArgs>(args?: SelectSubset<T, DegreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Degrees
     * const degree = await prisma.degree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DegreeUpdateManyArgs>(args: SelectSubset<T, DegreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degrees and returns the data updated in the database.
     * @param {DegreeUpdateManyAndReturnArgs} args - Arguments to update many Degrees.
     * @example
     * // Update many Degrees
     * const degree = await prisma.degree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Degrees and only return the `id`
     * const degreeWithIdOnly = await prisma.degree.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DegreeUpdateManyAndReturnArgs>(args: SelectSubset<T, DegreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Degree.
     * @param {DegreeUpsertArgs} args - Arguments to update or create a Degree.
     * @example
     * // Update or create a Degree
     * const degree = await prisma.degree.upsert({
     *   create: {
     *     // ... data to create a Degree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Degree we want to update
     *   }
     * })
     */
    upsert<T extends DegreeUpsertArgs>(args: SelectSubset<T, DegreeUpsertArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Degrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeCountArgs} args - Arguments to filter Degrees to count.
     * @example
     * // Count the number of Degrees
     * const count = await prisma.degree.count({
     *   where: {
     *     // ... the filter for the Degrees we want to count
     *   }
     * })
    **/
    count<T extends DegreeCountArgs>(
      args?: Subset<T, DegreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DegreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Degree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DegreeAggregateArgs>(args: Subset<T, DegreeAggregateArgs>): Prisma.PrismaPromise<GetDegreeAggregateType<T>>

    /**
     * Group by Degree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DegreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DegreeGroupByArgs['orderBy'] }
        : { orderBy?: DegreeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DegreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Degree model
   */
  readonly fields: DegreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Degree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DegreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careers<T extends Degree$careersArgs<ExtArgs> = {}>(args?: Subset<T, Degree$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    colleges<T extends Degree$collegesArgs<ExtArgs> = {}>(args?: Subset<T, Degree$collegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Degree model
   */
  interface DegreeFieldRefs {
    readonly id: FieldRef<"Degree", 'Int'>
    readonly name: FieldRef<"Degree", 'String'>
    readonly field: FieldRef<"Degree", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Degree findUnique
   */
  export type DegreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where: DegreeWhereUniqueInput
  }

  /**
   * Degree findUniqueOrThrow
   */
  export type DegreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where: DegreeWhereUniqueInput
  }

  /**
   * Degree findFirst
   */
  export type DegreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Degrees.
     */
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }

  /**
   * Degree findFirstOrThrow
   */
  export type DegreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Degrees.
     */
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }

  /**
   * Degree findMany
   */
  export type DegreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degrees to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }

  /**
   * Degree create
   */
  export type DegreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The data needed to create a Degree.
     */
    data: XOR<DegreeCreateInput, DegreeUncheckedCreateInput>
  }

  /**
   * Degree createMany
   */
  export type DegreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Degrees.
     */
    data: DegreeCreateManyInput | DegreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Degree createManyAndReturn
   */
  export type DegreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * The data used to create many Degrees.
     */
    data: DegreeCreateManyInput | DegreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Degree update
   */
  export type DegreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The data needed to update a Degree.
     */
    data: XOR<DegreeUpdateInput, DegreeUncheckedUpdateInput>
    /**
     * Choose, which Degree to update.
     */
    where: DegreeWhereUniqueInput
  }

  /**
   * Degree updateMany
   */
  export type DegreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Degrees.
     */
    data: XOR<DegreeUpdateManyMutationInput, DegreeUncheckedUpdateManyInput>
    /**
     * Filter which Degrees to update
     */
    where?: DegreeWhereInput
    /**
     * Limit how many Degrees to update.
     */
    limit?: number
  }

  /**
   * Degree updateManyAndReturn
   */
  export type DegreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * The data used to update Degrees.
     */
    data: XOR<DegreeUpdateManyMutationInput, DegreeUncheckedUpdateManyInput>
    /**
     * Filter which Degrees to update
     */
    where?: DegreeWhereInput
    /**
     * Limit how many Degrees to update.
     */
    limit?: number
  }

  /**
   * Degree upsert
   */
  export type DegreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The filter to search for the Degree to update in case it exists.
     */
    where: DegreeWhereUniqueInput
    /**
     * In case the Degree found by the `where` argument doesn't exist, create a new Degree with this data.
     */
    create: XOR<DegreeCreateInput, DegreeUncheckedCreateInput>
    /**
     * In case the Degree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DegreeUpdateInput, DegreeUncheckedUpdateInput>
  }

  /**
   * Degree delete
   */
  export type DegreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter which Degree to delete.
     */
    where: DegreeWhereUniqueInput
  }

  /**
   * Degree deleteMany
   */
  export type DegreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Degrees to delete
     */
    where?: DegreeWhereInput
    /**
     * Limit how many Degrees to delete.
     */
    limit?: number
  }

  /**
   * Degree.careers
   */
  export type Degree$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    where?: CareerOnDegreeWhereInput
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    cursor?: CareerOnDegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerOnDegreeScalarFieldEnum | CareerOnDegreeScalarFieldEnum[]
  }

  /**
   * Degree.colleges
   */
  export type Degree$collegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    where?: DegreeOnCollegeWhereInput
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    cursor?: DegreeOnCollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreeOnCollegeScalarFieldEnum | DegreeOnCollegeScalarFieldEnum[]
  }

  /**
   * Degree without action
   */
  export type DegreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Degree
     */
    omit?: DegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeInclude<ExtArgs> | null
  }


  /**
   * Model DegreeOnCollege
   */

  export type AggregateDegreeOnCollege = {
    _count: DegreeOnCollegeCountAggregateOutputType | null
    _avg: DegreeOnCollegeAvgAggregateOutputType | null
    _sum: DegreeOnCollegeSumAggregateOutputType | null
    _min: DegreeOnCollegeMinAggregateOutputType | null
    _max: DegreeOnCollegeMaxAggregateOutputType | null
  }

  export type DegreeOnCollegeAvgAggregateOutputType = {
    collegeId: number | null
    degreeId: number | null
  }

  export type DegreeOnCollegeSumAggregateOutputType = {
    collegeId: number | null
    degreeId: number | null
  }

  export type DegreeOnCollegeMinAggregateOutputType = {
    collegeId: number | null
    degreeId: number | null
  }

  export type DegreeOnCollegeMaxAggregateOutputType = {
    collegeId: number | null
    degreeId: number | null
  }

  export type DegreeOnCollegeCountAggregateOutputType = {
    collegeId: number
    degreeId: number
    _all: number
  }


  export type DegreeOnCollegeAvgAggregateInputType = {
    collegeId?: true
    degreeId?: true
  }

  export type DegreeOnCollegeSumAggregateInputType = {
    collegeId?: true
    degreeId?: true
  }

  export type DegreeOnCollegeMinAggregateInputType = {
    collegeId?: true
    degreeId?: true
  }

  export type DegreeOnCollegeMaxAggregateInputType = {
    collegeId?: true
    degreeId?: true
  }

  export type DegreeOnCollegeCountAggregateInputType = {
    collegeId?: true
    degreeId?: true
    _all?: true
  }

  export type DegreeOnCollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreeOnCollege to aggregate.
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreeOnColleges to fetch.
     */
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DegreeOnCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreeOnColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreeOnColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DegreeOnColleges
    **/
    _count?: true | DegreeOnCollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DegreeOnCollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DegreeOnCollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DegreeOnCollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DegreeOnCollegeMaxAggregateInputType
  }

  export type GetDegreeOnCollegeAggregateType<T extends DegreeOnCollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateDegreeOnCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegreeOnCollege[P]>
      : GetScalarType<T[P], AggregateDegreeOnCollege[P]>
  }




  export type DegreeOnCollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DegreeOnCollegeWhereInput
    orderBy?: DegreeOnCollegeOrderByWithAggregationInput | DegreeOnCollegeOrderByWithAggregationInput[]
    by: DegreeOnCollegeScalarFieldEnum[] | DegreeOnCollegeScalarFieldEnum
    having?: DegreeOnCollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DegreeOnCollegeCountAggregateInputType | true
    _avg?: DegreeOnCollegeAvgAggregateInputType
    _sum?: DegreeOnCollegeSumAggregateInputType
    _min?: DegreeOnCollegeMinAggregateInputType
    _max?: DegreeOnCollegeMaxAggregateInputType
  }

  export type DegreeOnCollegeGroupByOutputType = {
    collegeId: number
    degreeId: number
    _count: DegreeOnCollegeCountAggregateOutputType | null
    _avg: DegreeOnCollegeAvgAggregateOutputType | null
    _sum: DegreeOnCollegeSumAggregateOutputType | null
    _min: DegreeOnCollegeMinAggregateOutputType | null
    _max: DegreeOnCollegeMaxAggregateOutputType | null
  }

  type GetDegreeOnCollegeGroupByPayload<T extends DegreeOnCollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DegreeOnCollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DegreeOnCollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DegreeOnCollegeGroupByOutputType[P]>
            : GetScalarType<T[P], DegreeOnCollegeGroupByOutputType[P]>
        }
      >
    >


  export type DegreeOnCollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collegeId?: boolean
    degreeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreeOnCollege"]>

  export type DegreeOnCollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collegeId?: boolean
    degreeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreeOnCollege"]>

  export type DegreeOnCollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collegeId?: boolean
    degreeId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degreeOnCollege"]>

  export type DegreeOnCollegeSelectScalar = {
    collegeId?: boolean
    degreeId?: boolean
  }

  export type DegreeOnCollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"collegeId" | "degreeId", ExtArgs["result"]["degreeOnCollege"]>
  export type DegreeOnCollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }
  export type DegreeOnCollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }
  export type DegreeOnCollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }

  export type $DegreeOnCollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DegreeOnCollege"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
      degree: Prisma.$DegreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      collegeId: number
      degreeId: number
    }, ExtArgs["result"]["degreeOnCollege"]>
    composites: {}
  }

  type DegreeOnCollegeGetPayload<S extends boolean | null | undefined | DegreeOnCollegeDefaultArgs> = $Result.GetResult<Prisma.$DegreeOnCollegePayload, S>

  type DegreeOnCollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DegreeOnCollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DegreeOnCollegeCountAggregateInputType | true
    }

  export interface DegreeOnCollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DegreeOnCollege'], meta: { name: 'DegreeOnCollege' } }
    /**
     * Find zero or one DegreeOnCollege that matches the filter.
     * @param {DegreeOnCollegeFindUniqueArgs} args - Arguments to find a DegreeOnCollege
     * @example
     * // Get one DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DegreeOnCollegeFindUniqueArgs>(args: SelectSubset<T, DegreeOnCollegeFindUniqueArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DegreeOnCollege that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DegreeOnCollegeFindUniqueOrThrowArgs} args - Arguments to find a DegreeOnCollege
     * @example
     * // Get one DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DegreeOnCollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, DegreeOnCollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreeOnCollege that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeFindFirstArgs} args - Arguments to find a DegreeOnCollege
     * @example
     * // Get one DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DegreeOnCollegeFindFirstArgs>(args?: SelectSubset<T, DegreeOnCollegeFindFirstArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DegreeOnCollege that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeFindFirstOrThrowArgs} args - Arguments to find a DegreeOnCollege
     * @example
     * // Get one DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DegreeOnCollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, DegreeOnCollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DegreeOnColleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DegreeOnColleges
     * const degreeOnColleges = await prisma.degreeOnCollege.findMany()
     * 
     * // Get first 10 DegreeOnColleges
     * const degreeOnColleges = await prisma.degreeOnCollege.findMany({ take: 10 })
     * 
     * // Only select the `collegeId`
     * const degreeOnCollegeWithCollegeIdOnly = await prisma.degreeOnCollege.findMany({ select: { collegeId: true } })
     * 
     */
    findMany<T extends DegreeOnCollegeFindManyArgs>(args?: SelectSubset<T, DegreeOnCollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DegreeOnCollege.
     * @param {DegreeOnCollegeCreateArgs} args - Arguments to create a DegreeOnCollege.
     * @example
     * // Create one DegreeOnCollege
     * const DegreeOnCollege = await prisma.degreeOnCollege.create({
     *   data: {
     *     // ... data to create a DegreeOnCollege
     *   }
     * })
     * 
     */
    create<T extends DegreeOnCollegeCreateArgs>(args: SelectSubset<T, DegreeOnCollegeCreateArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DegreeOnColleges.
     * @param {DegreeOnCollegeCreateManyArgs} args - Arguments to create many DegreeOnColleges.
     * @example
     * // Create many DegreeOnColleges
     * const degreeOnCollege = await prisma.degreeOnCollege.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DegreeOnCollegeCreateManyArgs>(args?: SelectSubset<T, DegreeOnCollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DegreeOnColleges and returns the data saved in the database.
     * @param {DegreeOnCollegeCreateManyAndReturnArgs} args - Arguments to create many DegreeOnColleges.
     * @example
     * // Create many DegreeOnColleges
     * const degreeOnCollege = await prisma.degreeOnCollege.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DegreeOnColleges and only return the `collegeId`
     * const degreeOnCollegeWithCollegeIdOnly = await prisma.degreeOnCollege.createManyAndReturn({
     *   select: { collegeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DegreeOnCollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, DegreeOnCollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DegreeOnCollege.
     * @param {DegreeOnCollegeDeleteArgs} args - Arguments to delete one DegreeOnCollege.
     * @example
     * // Delete one DegreeOnCollege
     * const DegreeOnCollege = await prisma.degreeOnCollege.delete({
     *   where: {
     *     // ... filter to delete one DegreeOnCollege
     *   }
     * })
     * 
     */
    delete<T extends DegreeOnCollegeDeleteArgs>(args: SelectSubset<T, DegreeOnCollegeDeleteArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DegreeOnCollege.
     * @param {DegreeOnCollegeUpdateArgs} args - Arguments to update one DegreeOnCollege.
     * @example
     * // Update one DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DegreeOnCollegeUpdateArgs>(args: SelectSubset<T, DegreeOnCollegeUpdateArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DegreeOnColleges.
     * @param {DegreeOnCollegeDeleteManyArgs} args - Arguments to filter DegreeOnColleges to delete.
     * @example
     * // Delete a few DegreeOnColleges
     * const { count } = await prisma.degreeOnCollege.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DegreeOnCollegeDeleteManyArgs>(args?: SelectSubset<T, DegreeOnCollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreeOnColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DegreeOnColleges
     * const degreeOnCollege = await prisma.degreeOnCollege.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DegreeOnCollegeUpdateManyArgs>(args: SelectSubset<T, DegreeOnCollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DegreeOnColleges and returns the data updated in the database.
     * @param {DegreeOnCollegeUpdateManyAndReturnArgs} args - Arguments to update many DegreeOnColleges.
     * @example
     * // Update many DegreeOnColleges
     * const degreeOnCollege = await prisma.degreeOnCollege.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DegreeOnColleges and only return the `collegeId`
     * const degreeOnCollegeWithCollegeIdOnly = await prisma.degreeOnCollege.updateManyAndReturn({
     *   select: { collegeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DegreeOnCollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, DegreeOnCollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DegreeOnCollege.
     * @param {DegreeOnCollegeUpsertArgs} args - Arguments to update or create a DegreeOnCollege.
     * @example
     * // Update or create a DegreeOnCollege
     * const degreeOnCollege = await prisma.degreeOnCollege.upsert({
     *   create: {
     *     // ... data to create a DegreeOnCollege
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DegreeOnCollege we want to update
     *   }
     * })
     */
    upsert<T extends DegreeOnCollegeUpsertArgs>(args: SelectSubset<T, DegreeOnCollegeUpsertArgs<ExtArgs>>): Prisma__DegreeOnCollegeClient<$Result.GetResult<Prisma.$DegreeOnCollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DegreeOnColleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeCountArgs} args - Arguments to filter DegreeOnColleges to count.
     * @example
     * // Count the number of DegreeOnColleges
     * const count = await prisma.degreeOnCollege.count({
     *   where: {
     *     // ... the filter for the DegreeOnColleges we want to count
     *   }
     * })
    **/
    count<T extends DegreeOnCollegeCountArgs>(
      args?: Subset<T, DegreeOnCollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DegreeOnCollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DegreeOnCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DegreeOnCollegeAggregateArgs>(args: Subset<T, DegreeOnCollegeAggregateArgs>): Prisma.PrismaPromise<GetDegreeOnCollegeAggregateType<T>>

    /**
     * Group by DegreeOnCollege.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeOnCollegeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DegreeOnCollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DegreeOnCollegeGroupByArgs['orderBy'] }
        : { orderBy?: DegreeOnCollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DegreeOnCollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegreeOnCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DegreeOnCollege model
   */
  readonly fields: DegreeOnCollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DegreeOnCollege.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DegreeOnCollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    degree<T extends DegreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DegreeDefaultArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DegreeOnCollege model
   */
  interface DegreeOnCollegeFieldRefs {
    readonly collegeId: FieldRef<"DegreeOnCollege", 'Int'>
    readonly degreeId: FieldRef<"DegreeOnCollege", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DegreeOnCollege findUnique
   */
  export type DegreeOnCollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter, which DegreeOnCollege to fetch.
     */
    where: DegreeOnCollegeWhereUniqueInput
  }

  /**
   * DegreeOnCollege findUniqueOrThrow
   */
  export type DegreeOnCollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter, which DegreeOnCollege to fetch.
     */
    where: DegreeOnCollegeWhereUniqueInput
  }

  /**
   * DegreeOnCollege findFirst
   */
  export type DegreeOnCollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter, which DegreeOnCollege to fetch.
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreeOnColleges to fetch.
     */
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreeOnColleges.
     */
    cursor?: DegreeOnCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreeOnColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreeOnColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreeOnColleges.
     */
    distinct?: DegreeOnCollegeScalarFieldEnum | DegreeOnCollegeScalarFieldEnum[]
  }

  /**
   * DegreeOnCollege findFirstOrThrow
   */
  export type DegreeOnCollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter, which DegreeOnCollege to fetch.
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreeOnColleges to fetch.
     */
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DegreeOnColleges.
     */
    cursor?: DegreeOnCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreeOnColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreeOnColleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DegreeOnColleges.
     */
    distinct?: DegreeOnCollegeScalarFieldEnum | DegreeOnCollegeScalarFieldEnum[]
  }

  /**
   * DegreeOnCollege findMany
   */
  export type DegreeOnCollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter, which DegreeOnColleges to fetch.
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DegreeOnColleges to fetch.
     */
    orderBy?: DegreeOnCollegeOrderByWithRelationInput | DegreeOnCollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DegreeOnColleges.
     */
    cursor?: DegreeOnCollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DegreeOnColleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DegreeOnColleges.
     */
    skip?: number
    distinct?: DegreeOnCollegeScalarFieldEnum | DegreeOnCollegeScalarFieldEnum[]
  }

  /**
   * DegreeOnCollege create
   */
  export type DegreeOnCollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a DegreeOnCollege.
     */
    data: XOR<DegreeOnCollegeCreateInput, DegreeOnCollegeUncheckedCreateInput>
  }

  /**
   * DegreeOnCollege createMany
   */
  export type DegreeOnCollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DegreeOnColleges.
     */
    data: DegreeOnCollegeCreateManyInput | DegreeOnCollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DegreeOnCollege createManyAndReturn
   */
  export type DegreeOnCollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * The data used to create many DegreeOnColleges.
     */
    data: DegreeOnCollegeCreateManyInput | DegreeOnCollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DegreeOnCollege update
   */
  export type DegreeOnCollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a DegreeOnCollege.
     */
    data: XOR<DegreeOnCollegeUpdateInput, DegreeOnCollegeUncheckedUpdateInput>
    /**
     * Choose, which DegreeOnCollege to update.
     */
    where: DegreeOnCollegeWhereUniqueInput
  }

  /**
   * DegreeOnCollege updateMany
   */
  export type DegreeOnCollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DegreeOnColleges.
     */
    data: XOR<DegreeOnCollegeUpdateManyMutationInput, DegreeOnCollegeUncheckedUpdateManyInput>
    /**
     * Filter which DegreeOnColleges to update
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * Limit how many DegreeOnColleges to update.
     */
    limit?: number
  }

  /**
   * DegreeOnCollege updateManyAndReturn
   */
  export type DegreeOnCollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * The data used to update DegreeOnColleges.
     */
    data: XOR<DegreeOnCollegeUpdateManyMutationInput, DegreeOnCollegeUncheckedUpdateManyInput>
    /**
     * Filter which DegreeOnColleges to update
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * Limit how many DegreeOnColleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DegreeOnCollege upsert
   */
  export type DegreeOnCollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the DegreeOnCollege to update in case it exists.
     */
    where: DegreeOnCollegeWhereUniqueInput
    /**
     * In case the DegreeOnCollege found by the `where` argument doesn't exist, create a new DegreeOnCollege with this data.
     */
    create: XOR<DegreeOnCollegeCreateInput, DegreeOnCollegeUncheckedCreateInput>
    /**
     * In case the DegreeOnCollege was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DegreeOnCollegeUpdateInput, DegreeOnCollegeUncheckedUpdateInput>
  }

  /**
   * DegreeOnCollege delete
   */
  export type DegreeOnCollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
    /**
     * Filter which DegreeOnCollege to delete.
     */
    where: DegreeOnCollegeWhereUniqueInput
  }

  /**
   * DegreeOnCollege deleteMany
   */
  export type DegreeOnCollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DegreeOnColleges to delete
     */
    where?: DegreeOnCollegeWhereInput
    /**
     * Limit how many DegreeOnColleges to delete.
     */
    limit?: number
  }

  /**
   * DegreeOnCollege without action
   */
  export type DegreeOnCollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DegreeOnCollege
     */
    select?: DegreeOnCollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DegreeOnCollege
     */
    omit?: DegreeOnCollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DegreeOnCollegeInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    salary: number | null
  }

  export type CareerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    salary: number | null
  }

  export type CareerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    salary: number | null
  }

  export type CareerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    salary: number | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    salary: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id?: true
    userId?: true
    salary?: true
  }

  export type CareerSumAggregateInputType = {
    id?: true
    userId?: true
    salary?: true
  }

  export type CareerMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    salary?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    salary?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    salary?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: number
    userId: number
    title: string
    description: string
    salary: number | null
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
    skillsRequired?: boolean | Career$skillsRequiredArgs<ExtArgs>
    interestRequired?: boolean | Career$interestRequiredArgs<ExtArgs>
    degreesRequired?: boolean | Career$degreesRequiredArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "salary", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillsRequired?: boolean | Career$skillsRequiredArgs<ExtArgs>
    interestRequired?: boolean | Career$interestRequiredArgs<ExtArgs>
    degreesRequired?: boolean | Career$degreesRequiredArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      skillsRequired: Prisma.$SkillOnCareerPayload<ExtArgs>[]
      interestRequired: Prisma.$InterestOnCareerPayload<ExtArgs>[]
      degreesRequired: Prisma.$CareerOnDegreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      description: string
      salary: number | null
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillsRequired<T extends Career$skillsRequiredArgs<ExtArgs> = {}>(args?: Subset<T, Career$skillsRequiredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interestRequired<T extends Career$interestRequiredArgs<ExtArgs> = {}>(args?: Subset<T, Career$interestRequiredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    degreesRequired<T extends Career$degreesRequiredArgs<ExtArgs> = {}>(args?: Subset<T, Career$degreesRequiredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'Int'>
    readonly userId: FieldRef<"Career", 'Int'>
    readonly title: FieldRef<"Career", 'String'>
    readonly description: FieldRef<"Career", 'String'>
    readonly salary: FieldRef<"Career", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.skillsRequired
   */
  export type Career$skillsRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    where?: SkillOnCareerWhereInput
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    cursor?: SkillOnCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillOnCareerScalarFieldEnum | SkillOnCareerScalarFieldEnum[]
  }

  /**
   * Career.interestRequired
   */
  export type Career$interestRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    where?: InterestOnCareerWhereInput
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    cursor?: InterestOnCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestOnCareerScalarFieldEnum | InterestOnCareerScalarFieldEnum[]
  }

  /**
   * Career.degreesRequired
   */
  export type Career$degreesRequiredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    where?: CareerOnDegreeWhereInput
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    cursor?: CareerOnDegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerOnDegreeScalarFieldEnum | CareerOnDegreeScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model InterestOnCareer
   */

  export type AggregateInterestOnCareer = {
    _count: InterestOnCareerCountAggregateOutputType | null
    _avg: InterestOnCareerAvgAggregateOutputType | null
    _sum: InterestOnCareerSumAggregateOutputType | null
    _min: InterestOnCareerMinAggregateOutputType | null
    _max: InterestOnCareerMaxAggregateOutputType | null
  }

  export type InterestOnCareerAvgAggregateOutputType = {
    careerId: number | null
    interestId: number | null
  }

  export type InterestOnCareerSumAggregateOutputType = {
    careerId: number | null
    interestId: number | null
  }

  export type InterestOnCareerMinAggregateOutputType = {
    careerId: number | null
    interestId: number | null
  }

  export type InterestOnCareerMaxAggregateOutputType = {
    careerId: number | null
    interestId: number | null
  }

  export type InterestOnCareerCountAggregateOutputType = {
    careerId: number
    interestId: number
    _all: number
  }


  export type InterestOnCareerAvgAggregateInputType = {
    careerId?: true
    interestId?: true
  }

  export type InterestOnCareerSumAggregateInputType = {
    careerId?: true
    interestId?: true
  }

  export type InterestOnCareerMinAggregateInputType = {
    careerId?: true
    interestId?: true
  }

  export type InterestOnCareerMaxAggregateInputType = {
    careerId?: true
    interestId?: true
  }

  export type InterestOnCareerCountAggregateInputType = {
    careerId?: true
    interestId?: true
    _all?: true
  }

  export type InterestOnCareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestOnCareer to aggregate.
     */
    where?: InterestOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnCareers to fetch.
     */
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterestOnCareers
    **/
    _count?: true | InterestOnCareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestOnCareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestOnCareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestOnCareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestOnCareerMaxAggregateInputType
  }

  export type GetInterestOnCareerAggregateType<T extends InterestOnCareerAggregateArgs> = {
        [P in keyof T & keyof AggregateInterestOnCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterestOnCareer[P]>
      : GetScalarType<T[P], AggregateInterestOnCareer[P]>
  }




  export type InterestOnCareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestOnCareerWhereInput
    orderBy?: InterestOnCareerOrderByWithAggregationInput | InterestOnCareerOrderByWithAggregationInput[]
    by: InterestOnCareerScalarFieldEnum[] | InterestOnCareerScalarFieldEnum
    having?: InterestOnCareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestOnCareerCountAggregateInputType | true
    _avg?: InterestOnCareerAvgAggregateInputType
    _sum?: InterestOnCareerSumAggregateInputType
    _min?: InterestOnCareerMinAggregateInputType
    _max?: InterestOnCareerMaxAggregateInputType
  }

  export type InterestOnCareerGroupByOutputType = {
    careerId: number
    interestId: number
    _count: InterestOnCareerCountAggregateOutputType | null
    _avg: InterestOnCareerAvgAggregateOutputType | null
    _sum: InterestOnCareerSumAggregateOutputType | null
    _min: InterestOnCareerMinAggregateOutputType | null
    _max: InterestOnCareerMaxAggregateOutputType | null
  }

  type GetInterestOnCareerGroupByPayload<T extends InterestOnCareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestOnCareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestOnCareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestOnCareerGroupByOutputType[P]>
            : GetScalarType<T[P], InterestOnCareerGroupByOutputType[P]>
        }
      >
    >


  export type InterestOnCareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    interestId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnCareer"]>

  export type InterestOnCareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    interestId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnCareer"]>

  export type InterestOnCareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    interestId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestOnCareer"]>

  export type InterestOnCareerSelectScalar = {
    careerId?: boolean
    interestId?: boolean
  }

  export type InterestOnCareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"careerId" | "interestId", ExtArgs["result"]["interestOnCareer"]>
  export type InterestOnCareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }
  export type InterestOnCareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }
  export type InterestOnCareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }

  export type $InterestOnCareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterestOnCareer"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      interest: Prisma.$InterestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      careerId: number
      interestId: number
    }, ExtArgs["result"]["interestOnCareer"]>
    composites: {}
  }

  type InterestOnCareerGetPayload<S extends boolean | null | undefined | InterestOnCareerDefaultArgs> = $Result.GetResult<Prisma.$InterestOnCareerPayload, S>

  type InterestOnCareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestOnCareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestOnCareerCountAggregateInputType | true
    }

  export interface InterestOnCareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterestOnCareer'], meta: { name: 'InterestOnCareer' } }
    /**
     * Find zero or one InterestOnCareer that matches the filter.
     * @param {InterestOnCareerFindUniqueArgs} args - Arguments to find a InterestOnCareer
     * @example
     * // Get one InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestOnCareerFindUniqueArgs>(args: SelectSubset<T, InterestOnCareerFindUniqueArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterestOnCareer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestOnCareerFindUniqueOrThrowArgs} args - Arguments to find a InterestOnCareer
     * @example
     * // Get one InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestOnCareerFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestOnCareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestOnCareer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerFindFirstArgs} args - Arguments to find a InterestOnCareer
     * @example
     * // Get one InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestOnCareerFindFirstArgs>(args?: SelectSubset<T, InterestOnCareerFindFirstArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestOnCareer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerFindFirstOrThrowArgs} args - Arguments to find a InterestOnCareer
     * @example
     * // Get one InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestOnCareerFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestOnCareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterestOnCareers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterestOnCareers
     * const interestOnCareers = await prisma.interestOnCareer.findMany()
     * 
     * // Get first 10 InterestOnCareers
     * const interestOnCareers = await prisma.interestOnCareer.findMany({ take: 10 })
     * 
     * // Only select the `careerId`
     * const interestOnCareerWithCareerIdOnly = await prisma.interestOnCareer.findMany({ select: { careerId: true } })
     * 
     */
    findMany<T extends InterestOnCareerFindManyArgs>(args?: SelectSubset<T, InterestOnCareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterestOnCareer.
     * @param {InterestOnCareerCreateArgs} args - Arguments to create a InterestOnCareer.
     * @example
     * // Create one InterestOnCareer
     * const InterestOnCareer = await prisma.interestOnCareer.create({
     *   data: {
     *     // ... data to create a InterestOnCareer
     *   }
     * })
     * 
     */
    create<T extends InterestOnCareerCreateArgs>(args: SelectSubset<T, InterestOnCareerCreateArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterestOnCareers.
     * @param {InterestOnCareerCreateManyArgs} args - Arguments to create many InterestOnCareers.
     * @example
     * // Create many InterestOnCareers
     * const interestOnCareer = await prisma.interestOnCareer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestOnCareerCreateManyArgs>(args?: SelectSubset<T, InterestOnCareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterestOnCareers and returns the data saved in the database.
     * @param {InterestOnCareerCreateManyAndReturnArgs} args - Arguments to create many InterestOnCareers.
     * @example
     * // Create many InterestOnCareers
     * const interestOnCareer = await prisma.interestOnCareer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterestOnCareers and only return the `careerId`
     * const interestOnCareerWithCareerIdOnly = await prisma.interestOnCareer.createManyAndReturn({
     *   select: { careerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestOnCareerCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestOnCareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterestOnCareer.
     * @param {InterestOnCareerDeleteArgs} args - Arguments to delete one InterestOnCareer.
     * @example
     * // Delete one InterestOnCareer
     * const InterestOnCareer = await prisma.interestOnCareer.delete({
     *   where: {
     *     // ... filter to delete one InterestOnCareer
     *   }
     * })
     * 
     */
    delete<T extends InterestOnCareerDeleteArgs>(args: SelectSubset<T, InterestOnCareerDeleteArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterestOnCareer.
     * @param {InterestOnCareerUpdateArgs} args - Arguments to update one InterestOnCareer.
     * @example
     * // Update one InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestOnCareerUpdateArgs>(args: SelectSubset<T, InterestOnCareerUpdateArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterestOnCareers.
     * @param {InterestOnCareerDeleteManyArgs} args - Arguments to filter InterestOnCareers to delete.
     * @example
     * // Delete a few InterestOnCareers
     * const { count } = await prisma.interestOnCareer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestOnCareerDeleteManyArgs>(args?: SelectSubset<T, InterestOnCareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestOnCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterestOnCareers
     * const interestOnCareer = await prisma.interestOnCareer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestOnCareerUpdateManyArgs>(args: SelectSubset<T, InterestOnCareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestOnCareers and returns the data updated in the database.
     * @param {InterestOnCareerUpdateManyAndReturnArgs} args - Arguments to update many InterestOnCareers.
     * @example
     * // Update many InterestOnCareers
     * const interestOnCareer = await prisma.interestOnCareer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterestOnCareers and only return the `careerId`
     * const interestOnCareerWithCareerIdOnly = await prisma.interestOnCareer.updateManyAndReturn({
     *   select: { careerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterestOnCareerUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestOnCareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterestOnCareer.
     * @param {InterestOnCareerUpsertArgs} args - Arguments to update or create a InterestOnCareer.
     * @example
     * // Update or create a InterestOnCareer
     * const interestOnCareer = await prisma.interestOnCareer.upsert({
     *   create: {
     *     // ... data to create a InterestOnCareer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterestOnCareer we want to update
     *   }
     * })
     */
    upsert<T extends InterestOnCareerUpsertArgs>(args: SelectSubset<T, InterestOnCareerUpsertArgs<ExtArgs>>): Prisma__InterestOnCareerClient<$Result.GetResult<Prisma.$InterestOnCareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterestOnCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerCountArgs} args - Arguments to filter InterestOnCareers to count.
     * @example
     * // Count the number of InterestOnCareers
     * const count = await prisma.interestOnCareer.count({
     *   where: {
     *     // ... the filter for the InterestOnCareers we want to count
     *   }
     * })
    **/
    count<T extends InterestOnCareerCountArgs>(
      args?: Subset<T, InterestOnCareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestOnCareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterestOnCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestOnCareerAggregateArgs>(args: Subset<T, InterestOnCareerAggregateArgs>): Prisma.PrismaPromise<GetInterestOnCareerAggregateType<T>>

    /**
     * Group by InterestOnCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestOnCareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestOnCareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestOnCareerGroupByArgs['orderBy'] }
        : { orderBy?: InterestOnCareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestOnCareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestOnCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterestOnCareer model
   */
  readonly fields: InterestOnCareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterestOnCareer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestOnCareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestDefaultArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterestOnCareer model
   */
  interface InterestOnCareerFieldRefs {
    readonly careerId: FieldRef<"InterestOnCareer", 'Int'>
    readonly interestId: FieldRef<"InterestOnCareer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InterestOnCareer findUnique
   */
  export type InterestOnCareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnCareer to fetch.
     */
    where: InterestOnCareerWhereUniqueInput
  }

  /**
   * InterestOnCareer findUniqueOrThrow
   */
  export type InterestOnCareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnCareer to fetch.
     */
    where: InterestOnCareerWhereUniqueInput
  }

  /**
   * InterestOnCareer findFirst
   */
  export type InterestOnCareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnCareer to fetch.
     */
    where?: InterestOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnCareers to fetch.
     */
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestOnCareers.
     */
    cursor?: InterestOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestOnCareers.
     */
    distinct?: InterestOnCareerScalarFieldEnum | InterestOnCareerScalarFieldEnum[]
  }

  /**
   * InterestOnCareer findFirstOrThrow
   */
  export type InterestOnCareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnCareer to fetch.
     */
    where?: InterestOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnCareers to fetch.
     */
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestOnCareers.
     */
    cursor?: InterestOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestOnCareers.
     */
    distinct?: InterestOnCareerScalarFieldEnum | InterestOnCareerScalarFieldEnum[]
  }

  /**
   * InterestOnCareer findMany
   */
  export type InterestOnCareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which InterestOnCareers to fetch.
     */
    where?: InterestOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestOnCareers to fetch.
     */
    orderBy?: InterestOnCareerOrderByWithRelationInput | InterestOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterestOnCareers.
     */
    cursor?: InterestOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestOnCareers.
     */
    skip?: number
    distinct?: InterestOnCareerScalarFieldEnum | InterestOnCareerScalarFieldEnum[]
  }

  /**
   * InterestOnCareer create
   */
  export type InterestOnCareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * The data needed to create a InterestOnCareer.
     */
    data: XOR<InterestOnCareerCreateInput, InterestOnCareerUncheckedCreateInput>
  }

  /**
   * InterestOnCareer createMany
   */
  export type InterestOnCareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterestOnCareers.
     */
    data: InterestOnCareerCreateManyInput | InterestOnCareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterestOnCareer createManyAndReturn
   */
  export type InterestOnCareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * The data used to create many InterestOnCareers.
     */
    data: InterestOnCareerCreateManyInput | InterestOnCareerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestOnCareer update
   */
  export type InterestOnCareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * The data needed to update a InterestOnCareer.
     */
    data: XOR<InterestOnCareerUpdateInput, InterestOnCareerUncheckedUpdateInput>
    /**
     * Choose, which InterestOnCareer to update.
     */
    where: InterestOnCareerWhereUniqueInput
  }

  /**
   * InterestOnCareer updateMany
   */
  export type InterestOnCareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterestOnCareers.
     */
    data: XOR<InterestOnCareerUpdateManyMutationInput, InterestOnCareerUncheckedUpdateManyInput>
    /**
     * Filter which InterestOnCareers to update
     */
    where?: InterestOnCareerWhereInput
    /**
     * Limit how many InterestOnCareers to update.
     */
    limit?: number
  }

  /**
   * InterestOnCareer updateManyAndReturn
   */
  export type InterestOnCareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * The data used to update InterestOnCareers.
     */
    data: XOR<InterestOnCareerUpdateManyMutationInput, InterestOnCareerUncheckedUpdateManyInput>
    /**
     * Filter which InterestOnCareers to update
     */
    where?: InterestOnCareerWhereInput
    /**
     * Limit how many InterestOnCareers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterestOnCareer upsert
   */
  export type InterestOnCareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * The filter to search for the InterestOnCareer to update in case it exists.
     */
    where: InterestOnCareerWhereUniqueInput
    /**
     * In case the InterestOnCareer found by the `where` argument doesn't exist, create a new InterestOnCareer with this data.
     */
    create: XOR<InterestOnCareerCreateInput, InterestOnCareerUncheckedCreateInput>
    /**
     * In case the InterestOnCareer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestOnCareerUpdateInput, InterestOnCareerUncheckedUpdateInput>
  }

  /**
   * InterestOnCareer delete
   */
  export type InterestOnCareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
    /**
     * Filter which InterestOnCareer to delete.
     */
    where: InterestOnCareerWhereUniqueInput
  }

  /**
   * InterestOnCareer deleteMany
   */
  export type InterestOnCareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestOnCareers to delete
     */
    where?: InterestOnCareerWhereInput
    /**
     * Limit how many InterestOnCareers to delete.
     */
    limit?: number
  }

  /**
   * InterestOnCareer without action
   */
  export type InterestOnCareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestOnCareer
     */
    select?: InterestOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestOnCareer
     */
    omit?: InterestOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestOnCareerInclude<ExtArgs> | null
  }


  /**
   * Model SkillOnCareer
   */

  export type AggregateSkillOnCareer = {
    _count: SkillOnCareerCountAggregateOutputType | null
    _avg: SkillOnCareerAvgAggregateOutputType | null
    _sum: SkillOnCareerSumAggregateOutputType | null
    _min: SkillOnCareerMinAggregateOutputType | null
    _max: SkillOnCareerMaxAggregateOutputType | null
  }

  export type SkillOnCareerAvgAggregateOutputType = {
    careerId: number | null
    skillId: number | null
  }

  export type SkillOnCareerSumAggregateOutputType = {
    careerId: number | null
    skillId: number | null
  }

  export type SkillOnCareerMinAggregateOutputType = {
    careerId: number | null
    skillId: number | null
  }

  export type SkillOnCareerMaxAggregateOutputType = {
    careerId: number | null
    skillId: number | null
  }

  export type SkillOnCareerCountAggregateOutputType = {
    careerId: number
    skillId: number
    _all: number
  }


  export type SkillOnCareerAvgAggregateInputType = {
    careerId?: true
    skillId?: true
  }

  export type SkillOnCareerSumAggregateInputType = {
    careerId?: true
    skillId?: true
  }

  export type SkillOnCareerMinAggregateInputType = {
    careerId?: true
    skillId?: true
  }

  export type SkillOnCareerMaxAggregateInputType = {
    careerId?: true
    skillId?: true
  }

  export type SkillOnCareerCountAggregateInputType = {
    careerId?: true
    skillId?: true
    _all?: true
  }

  export type SkillOnCareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillOnCareer to aggregate.
     */
    where?: SkillOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnCareers to fetch.
     */
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillOnCareers
    **/
    _count?: true | SkillOnCareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillOnCareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillOnCareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillOnCareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillOnCareerMaxAggregateInputType
  }

  export type GetSkillOnCareerAggregateType<T extends SkillOnCareerAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillOnCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillOnCareer[P]>
      : GetScalarType<T[P], AggregateSkillOnCareer[P]>
  }




  export type SkillOnCareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillOnCareerWhereInput
    orderBy?: SkillOnCareerOrderByWithAggregationInput | SkillOnCareerOrderByWithAggregationInput[]
    by: SkillOnCareerScalarFieldEnum[] | SkillOnCareerScalarFieldEnum
    having?: SkillOnCareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillOnCareerCountAggregateInputType | true
    _avg?: SkillOnCareerAvgAggregateInputType
    _sum?: SkillOnCareerSumAggregateInputType
    _min?: SkillOnCareerMinAggregateInputType
    _max?: SkillOnCareerMaxAggregateInputType
  }

  export type SkillOnCareerGroupByOutputType = {
    careerId: number
    skillId: number
    _count: SkillOnCareerCountAggregateOutputType | null
    _avg: SkillOnCareerAvgAggregateOutputType | null
    _sum: SkillOnCareerSumAggregateOutputType | null
    _min: SkillOnCareerMinAggregateOutputType | null
    _max: SkillOnCareerMaxAggregateOutputType | null
  }

  type GetSkillOnCareerGroupByPayload<T extends SkillOnCareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillOnCareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillOnCareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillOnCareerGroupByOutputType[P]>
            : GetScalarType<T[P], SkillOnCareerGroupByOutputType[P]>
        }
      >
    >


  export type SkillOnCareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnCareer"]>

  export type SkillOnCareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnCareer"]>

  export type SkillOnCareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillOnCareer"]>

  export type SkillOnCareerSelectScalar = {
    careerId?: boolean
    skillId?: boolean
  }

  export type SkillOnCareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"careerId" | "skillId", ExtArgs["result"]["skillOnCareer"]>
  export type SkillOnCareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type SkillOnCareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type SkillOnCareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $SkillOnCareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillOnCareer"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      careerId: number
      skillId: number
    }, ExtArgs["result"]["skillOnCareer"]>
    composites: {}
  }

  type SkillOnCareerGetPayload<S extends boolean | null | undefined | SkillOnCareerDefaultArgs> = $Result.GetResult<Prisma.$SkillOnCareerPayload, S>

  type SkillOnCareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillOnCareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillOnCareerCountAggregateInputType | true
    }

  export interface SkillOnCareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillOnCareer'], meta: { name: 'SkillOnCareer' } }
    /**
     * Find zero or one SkillOnCareer that matches the filter.
     * @param {SkillOnCareerFindUniqueArgs} args - Arguments to find a SkillOnCareer
     * @example
     * // Get one SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillOnCareerFindUniqueArgs>(args: SelectSubset<T, SkillOnCareerFindUniqueArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillOnCareer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillOnCareerFindUniqueOrThrowArgs} args - Arguments to find a SkillOnCareer
     * @example
     * // Get one SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillOnCareerFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillOnCareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillOnCareer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerFindFirstArgs} args - Arguments to find a SkillOnCareer
     * @example
     * // Get one SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillOnCareerFindFirstArgs>(args?: SelectSubset<T, SkillOnCareerFindFirstArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillOnCareer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerFindFirstOrThrowArgs} args - Arguments to find a SkillOnCareer
     * @example
     * // Get one SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillOnCareerFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillOnCareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillOnCareers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillOnCareers
     * const skillOnCareers = await prisma.skillOnCareer.findMany()
     * 
     * // Get first 10 SkillOnCareers
     * const skillOnCareers = await prisma.skillOnCareer.findMany({ take: 10 })
     * 
     * // Only select the `careerId`
     * const skillOnCareerWithCareerIdOnly = await prisma.skillOnCareer.findMany({ select: { careerId: true } })
     * 
     */
    findMany<T extends SkillOnCareerFindManyArgs>(args?: SelectSubset<T, SkillOnCareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillOnCareer.
     * @param {SkillOnCareerCreateArgs} args - Arguments to create a SkillOnCareer.
     * @example
     * // Create one SkillOnCareer
     * const SkillOnCareer = await prisma.skillOnCareer.create({
     *   data: {
     *     // ... data to create a SkillOnCareer
     *   }
     * })
     * 
     */
    create<T extends SkillOnCareerCreateArgs>(args: SelectSubset<T, SkillOnCareerCreateArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillOnCareers.
     * @param {SkillOnCareerCreateManyArgs} args - Arguments to create many SkillOnCareers.
     * @example
     * // Create many SkillOnCareers
     * const skillOnCareer = await prisma.skillOnCareer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillOnCareerCreateManyArgs>(args?: SelectSubset<T, SkillOnCareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillOnCareers and returns the data saved in the database.
     * @param {SkillOnCareerCreateManyAndReturnArgs} args - Arguments to create many SkillOnCareers.
     * @example
     * // Create many SkillOnCareers
     * const skillOnCareer = await prisma.skillOnCareer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillOnCareers and only return the `careerId`
     * const skillOnCareerWithCareerIdOnly = await prisma.skillOnCareer.createManyAndReturn({
     *   select: { careerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillOnCareerCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillOnCareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillOnCareer.
     * @param {SkillOnCareerDeleteArgs} args - Arguments to delete one SkillOnCareer.
     * @example
     * // Delete one SkillOnCareer
     * const SkillOnCareer = await prisma.skillOnCareer.delete({
     *   where: {
     *     // ... filter to delete one SkillOnCareer
     *   }
     * })
     * 
     */
    delete<T extends SkillOnCareerDeleteArgs>(args: SelectSubset<T, SkillOnCareerDeleteArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillOnCareer.
     * @param {SkillOnCareerUpdateArgs} args - Arguments to update one SkillOnCareer.
     * @example
     * // Update one SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillOnCareerUpdateArgs>(args: SelectSubset<T, SkillOnCareerUpdateArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillOnCareers.
     * @param {SkillOnCareerDeleteManyArgs} args - Arguments to filter SkillOnCareers to delete.
     * @example
     * // Delete a few SkillOnCareers
     * const { count } = await prisma.skillOnCareer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillOnCareerDeleteManyArgs>(args?: SelectSubset<T, SkillOnCareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillOnCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillOnCareers
     * const skillOnCareer = await prisma.skillOnCareer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillOnCareerUpdateManyArgs>(args: SelectSubset<T, SkillOnCareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillOnCareers and returns the data updated in the database.
     * @param {SkillOnCareerUpdateManyAndReturnArgs} args - Arguments to update many SkillOnCareers.
     * @example
     * // Update many SkillOnCareers
     * const skillOnCareer = await prisma.skillOnCareer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillOnCareers and only return the `careerId`
     * const skillOnCareerWithCareerIdOnly = await prisma.skillOnCareer.updateManyAndReturn({
     *   select: { careerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillOnCareerUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillOnCareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillOnCareer.
     * @param {SkillOnCareerUpsertArgs} args - Arguments to update or create a SkillOnCareer.
     * @example
     * // Update or create a SkillOnCareer
     * const skillOnCareer = await prisma.skillOnCareer.upsert({
     *   create: {
     *     // ... data to create a SkillOnCareer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillOnCareer we want to update
     *   }
     * })
     */
    upsert<T extends SkillOnCareerUpsertArgs>(args: SelectSubset<T, SkillOnCareerUpsertArgs<ExtArgs>>): Prisma__SkillOnCareerClient<$Result.GetResult<Prisma.$SkillOnCareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillOnCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerCountArgs} args - Arguments to filter SkillOnCareers to count.
     * @example
     * // Count the number of SkillOnCareers
     * const count = await prisma.skillOnCareer.count({
     *   where: {
     *     // ... the filter for the SkillOnCareers we want to count
     *   }
     * })
    **/
    count<T extends SkillOnCareerCountArgs>(
      args?: Subset<T, SkillOnCareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillOnCareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillOnCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillOnCareerAggregateArgs>(args: Subset<T, SkillOnCareerAggregateArgs>): Prisma.PrismaPromise<GetSkillOnCareerAggregateType<T>>

    /**
     * Group by SkillOnCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillOnCareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillOnCareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillOnCareerGroupByArgs['orderBy'] }
        : { orderBy?: SkillOnCareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillOnCareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillOnCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillOnCareer model
   */
  readonly fields: SkillOnCareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillOnCareer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillOnCareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillOnCareer model
   */
  interface SkillOnCareerFieldRefs {
    readonly careerId: FieldRef<"SkillOnCareer", 'Int'>
    readonly skillId: FieldRef<"SkillOnCareer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SkillOnCareer findUnique
   */
  export type SkillOnCareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnCareer to fetch.
     */
    where: SkillOnCareerWhereUniqueInput
  }

  /**
   * SkillOnCareer findUniqueOrThrow
   */
  export type SkillOnCareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnCareer to fetch.
     */
    where: SkillOnCareerWhereUniqueInput
  }

  /**
   * SkillOnCareer findFirst
   */
  export type SkillOnCareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnCareer to fetch.
     */
    where?: SkillOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnCareers to fetch.
     */
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillOnCareers.
     */
    cursor?: SkillOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillOnCareers.
     */
    distinct?: SkillOnCareerScalarFieldEnum | SkillOnCareerScalarFieldEnum[]
  }

  /**
   * SkillOnCareer findFirstOrThrow
   */
  export type SkillOnCareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnCareer to fetch.
     */
    where?: SkillOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnCareers to fetch.
     */
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillOnCareers.
     */
    cursor?: SkillOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillOnCareers.
     */
    distinct?: SkillOnCareerScalarFieldEnum | SkillOnCareerScalarFieldEnum[]
  }

  /**
   * SkillOnCareer findMany
   */
  export type SkillOnCareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter, which SkillOnCareers to fetch.
     */
    where?: SkillOnCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillOnCareers to fetch.
     */
    orderBy?: SkillOnCareerOrderByWithRelationInput | SkillOnCareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillOnCareers.
     */
    cursor?: SkillOnCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillOnCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillOnCareers.
     */
    skip?: number
    distinct?: SkillOnCareerScalarFieldEnum | SkillOnCareerScalarFieldEnum[]
  }

  /**
   * SkillOnCareer create
   */
  export type SkillOnCareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillOnCareer.
     */
    data: XOR<SkillOnCareerCreateInput, SkillOnCareerUncheckedCreateInput>
  }

  /**
   * SkillOnCareer createMany
   */
  export type SkillOnCareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillOnCareers.
     */
    data: SkillOnCareerCreateManyInput | SkillOnCareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillOnCareer createManyAndReturn
   */
  export type SkillOnCareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * The data used to create many SkillOnCareers.
     */
    data: SkillOnCareerCreateManyInput | SkillOnCareerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillOnCareer update
   */
  export type SkillOnCareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillOnCareer.
     */
    data: XOR<SkillOnCareerUpdateInput, SkillOnCareerUncheckedUpdateInput>
    /**
     * Choose, which SkillOnCareer to update.
     */
    where: SkillOnCareerWhereUniqueInput
  }

  /**
   * SkillOnCareer updateMany
   */
  export type SkillOnCareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillOnCareers.
     */
    data: XOR<SkillOnCareerUpdateManyMutationInput, SkillOnCareerUncheckedUpdateManyInput>
    /**
     * Filter which SkillOnCareers to update
     */
    where?: SkillOnCareerWhereInput
    /**
     * Limit how many SkillOnCareers to update.
     */
    limit?: number
  }

  /**
   * SkillOnCareer updateManyAndReturn
   */
  export type SkillOnCareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * The data used to update SkillOnCareers.
     */
    data: XOR<SkillOnCareerUpdateManyMutationInput, SkillOnCareerUncheckedUpdateManyInput>
    /**
     * Filter which SkillOnCareers to update
     */
    where?: SkillOnCareerWhereInput
    /**
     * Limit how many SkillOnCareers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillOnCareer upsert
   */
  export type SkillOnCareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillOnCareer to update in case it exists.
     */
    where: SkillOnCareerWhereUniqueInput
    /**
     * In case the SkillOnCareer found by the `where` argument doesn't exist, create a new SkillOnCareer with this data.
     */
    create: XOR<SkillOnCareerCreateInput, SkillOnCareerUncheckedCreateInput>
    /**
     * In case the SkillOnCareer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillOnCareerUpdateInput, SkillOnCareerUncheckedUpdateInput>
  }

  /**
   * SkillOnCareer delete
   */
  export type SkillOnCareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
    /**
     * Filter which SkillOnCareer to delete.
     */
    where: SkillOnCareerWhereUniqueInput
  }

  /**
   * SkillOnCareer deleteMany
   */
  export type SkillOnCareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillOnCareers to delete
     */
    where?: SkillOnCareerWhereInput
    /**
     * Limit how many SkillOnCareers to delete.
     */
    limit?: number
  }

  /**
   * SkillOnCareer without action
   */
  export type SkillOnCareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillOnCareer
     */
    select?: SkillOnCareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillOnCareer
     */
    omit?: SkillOnCareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillOnCareerInclude<ExtArgs> | null
  }


  /**
   * Model CareerOnDegree
   */

  export type AggregateCareerOnDegree = {
    _count: CareerOnDegreeCountAggregateOutputType | null
    _avg: CareerOnDegreeAvgAggregateOutputType | null
    _sum: CareerOnDegreeSumAggregateOutputType | null
    _min: CareerOnDegreeMinAggregateOutputType | null
    _max: CareerOnDegreeMaxAggregateOutputType | null
  }

  export type CareerOnDegreeAvgAggregateOutputType = {
    careerId: number | null
    degreeId: number | null
  }

  export type CareerOnDegreeSumAggregateOutputType = {
    careerId: number | null
    degreeId: number | null
  }

  export type CareerOnDegreeMinAggregateOutputType = {
    careerId: number | null
    degreeId: number | null
  }

  export type CareerOnDegreeMaxAggregateOutputType = {
    careerId: number | null
    degreeId: number | null
  }

  export type CareerOnDegreeCountAggregateOutputType = {
    careerId: number
    degreeId: number
    _all: number
  }


  export type CareerOnDegreeAvgAggregateInputType = {
    careerId?: true
    degreeId?: true
  }

  export type CareerOnDegreeSumAggregateInputType = {
    careerId?: true
    degreeId?: true
  }

  export type CareerOnDegreeMinAggregateInputType = {
    careerId?: true
    degreeId?: true
  }

  export type CareerOnDegreeMaxAggregateInputType = {
    careerId?: true
    degreeId?: true
  }

  export type CareerOnDegreeCountAggregateInputType = {
    careerId?: true
    degreeId?: true
    _all?: true
  }

  export type CareerOnDegreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerOnDegree to aggregate.
     */
    where?: CareerOnDegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerOnDegrees to fetch.
     */
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerOnDegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerOnDegrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerOnDegrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerOnDegrees
    **/
    _count?: true | CareerOnDegreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerOnDegreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerOnDegreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerOnDegreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerOnDegreeMaxAggregateInputType
  }

  export type GetCareerOnDegreeAggregateType<T extends CareerOnDegreeAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerOnDegree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerOnDegree[P]>
      : GetScalarType<T[P], AggregateCareerOnDegree[P]>
  }




  export type CareerOnDegreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerOnDegreeWhereInput
    orderBy?: CareerOnDegreeOrderByWithAggregationInput | CareerOnDegreeOrderByWithAggregationInput[]
    by: CareerOnDegreeScalarFieldEnum[] | CareerOnDegreeScalarFieldEnum
    having?: CareerOnDegreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerOnDegreeCountAggregateInputType | true
    _avg?: CareerOnDegreeAvgAggregateInputType
    _sum?: CareerOnDegreeSumAggregateInputType
    _min?: CareerOnDegreeMinAggregateInputType
    _max?: CareerOnDegreeMaxAggregateInputType
  }

  export type CareerOnDegreeGroupByOutputType = {
    careerId: number
    degreeId: number
    _count: CareerOnDegreeCountAggregateOutputType | null
    _avg: CareerOnDegreeAvgAggregateOutputType | null
    _sum: CareerOnDegreeSumAggregateOutputType | null
    _min: CareerOnDegreeMinAggregateOutputType | null
    _max: CareerOnDegreeMaxAggregateOutputType | null
  }

  type GetCareerOnDegreeGroupByPayload<T extends CareerOnDegreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerOnDegreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerOnDegreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerOnDegreeGroupByOutputType[P]>
            : GetScalarType<T[P], CareerOnDegreeGroupByOutputType[P]>
        }
      >
    >


  export type CareerOnDegreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    degreeId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerOnDegree"]>

  export type CareerOnDegreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    degreeId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerOnDegree"]>

  export type CareerOnDegreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    careerId?: boolean
    degreeId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerOnDegree"]>

  export type CareerOnDegreeSelectScalar = {
    careerId?: boolean
    degreeId?: boolean
  }

  export type CareerOnDegreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"careerId" | "degreeId", ExtArgs["result"]["careerOnDegree"]>
  export type CareerOnDegreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }
  export type CareerOnDegreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }
  export type CareerOnDegreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    degree?: boolean | DegreeDefaultArgs<ExtArgs>
  }

  export type $CareerOnDegreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerOnDegree"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      degree: Prisma.$DegreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      careerId: number
      degreeId: number
    }, ExtArgs["result"]["careerOnDegree"]>
    composites: {}
  }

  type CareerOnDegreeGetPayload<S extends boolean | null | undefined | CareerOnDegreeDefaultArgs> = $Result.GetResult<Prisma.$CareerOnDegreePayload, S>

  type CareerOnDegreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerOnDegreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerOnDegreeCountAggregateInputType | true
    }

  export interface CareerOnDegreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerOnDegree'], meta: { name: 'CareerOnDegree' } }
    /**
     * Find zero or one CareerOnDegree that matches the filter.
     * @param {CareerOnDegreeFindUniqueArgs} args - Arguments to find a CareerOnDegree
     * @example
     * // Get one CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerOnDegreeFindUniqueArgs>(args: SelectSubset<T, CareerOnDegreeFindUniqueArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareerOnDegree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerOnDegreeFindUniqueOrThrowArgs} args - Arguments to find a CareerOnDegree
     * @example
     * // Get one CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerOnDegreeFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerOnDegreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerOnDegree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeFindFirstArgs} args - Arguments to find a CareerOnDegree
     * @example
     * // Get one CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerOnDegreeFindFirstArgs>(args?: SelectSubset<T, CareerOnDegreeFindFirstArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerOnDegree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeFindFirstOrThrowArgs} args - Arguments to find a CareerOnDegree
     * @example
     * // Get one CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerOnDegreeFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerOnDegreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareerOnDegrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerOnDegrees
     * const careerOnDegrees = await prisma.careerOnDegree.findMany()
     * 
     * // Get first 10 CareerOnDegrees
     * const careerOnDegrees = await prisma.careerOnDegree.findMany({ take: 10 })
     * 
     * // Only select the `careerId`
     * const careerOnDegreeWithCareerIdOnly = await prisma.careerOnDegree.findMany({ select: { careerId: true } })
     * 
     */
    findMany<T extends CareerOnDegreeFindManyArgs>(args?: SelectSubset<T, CareerOnDegreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareerOnDegree.
     * @param {CareerOnDegreeCreateArgs} args - Arguments to create a CareerOnDegree.
     * @example
     * // Create one CareerOnDegree
     * const CareerOnDegree = await prisma.careerOnDegree.create({
     *   data: {
     *     // ... data to create a CareerOnDegree
     *   }
     * })
     * 
     */
    create<T extends CareerOnDegreeCreateArgs>(args: SelectSubset<T, CareerOnDegreeCreateArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareerOnDegrees.
     * @param {CareerOnDegreeCreateManyArgs} args - Arguments to create many CareerOnDegrees.
     * @example
     * // Create many CareerOnDegrees
     * const careerOnDegree = await prisma.careerOnDegree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerOnDegreeCreateManyArgs>(args?: SelectSubset<T, CareerOnDegreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareerOnDegrees and returns the data saved in the database.
     * @param {CareerOnDegreeCreateManyAndReturnArgs} args - Arguments to create many CareerOnDegrees.
     * @example
     * // Create many CareerOnDegrees
     * const careerOnDegree = await prisma.careerOnDegree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareerOnDegrees and only return the `careerId`
     * const careerOnDegreeWithCareerIdOnly = await prisma.careerOnDegree.createManyAndReturn({
     *   select: { careerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerOnDegreeCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerOnDegreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareerOnDegree.
     * @param {CareerOnDegreeDeleteArgs} args - Arguments to delete one CareerOnDegree.
     * @example
     * // Delete one CareerOnDegree
     * const CareerOnDegree = await prisma.careerOnDegree.delete({
     *   where: {
     *     // ... filter to delete one CareerOnDegree
     *   }
     * })
     * 
     */
    delete<T extends CareerOnDegreeDeleteArgs>(args: SelectSubset<T, CareerOnDegreeDeleteArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareerOnDegree.
     * @param {CareerOnDegreeUpdateArgs} args - Arguments to update one CareerOnDegree.
     * @example
     * // Update one CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerOnDegreeUpdateArgs>(args: SelectSubset<T, CareerOnDegreeUpdateArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareerOnDegrees.
     * @param {CareerOnDegreeDeleteManyArgs} args - Arguments to filter CareerOnDegrees to delete.
     * @example
     * // Delete a few CareerOnDegrees
     * const { count } = await prisma.careerOnDegree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerOnDegreeDeleteManyArgs>(args?: SelectSubset<T, CareerOnDegreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerOnDegrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerOnDegrees
     * const careerOnDegree = await prisma.careerOnDegree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerOnDegreeUpdateManyArgs>(args: SelectSubset<T, CareerOnDegreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerOnDegrees and returns the data updated in the database.
     * @param {CareerOnDegreeUpdateManyAndReturnArgs} args - Arguments to update many CareerOnDegrees.
     * @example
     * // Update many CareerOnDegrees
     * const careerOnDegree = await prisma.careerOnDegree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareerOnDegrees and only return the `careerId`
     * const careerOnDegreeWithCareerIdOnly = await prisma.careerOnDegree.updateManyAndReturn({
     *   select: { careerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerOnDegreeUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerOnDegreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareerOnDegree.
     * @param {CareerOnDegreeUpsertArgs} args - Arguments to update or create a CareerOnDegree.
     * @example
     * // Update or create a CareerOnDegree
     * const careerOnDegree = await prisma.careerOnDegree.upsert({
     *   create: {
     *     // ... data to create a CareerOnDegree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerOnDegree we want to update
     *   }
     * })
     */
    upsert<T extends CareerOnDegreeUpsertArgs>(args: SelectSubset<T, CareerOnDegreeUpsertArgs<ExtArgs>>): Prisma__CareerOnDegreeClient<$Result.GetResult<Prisma.$CareerOnDegreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareerOnDegrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeCountArgs} args - Arguments to filter CareerOnDegrees to count.
     * @example
     * // Count the number of CareerOnDegrees
     * const count = await prisma.careerOnDegree.count({
     *   where: {
     *     // ... the filter for the CareerOnDegrees we want to count
     *   }
     * })
    **/
    count<T extends CareerOnDegreeCountArgs>(
      args?: Subset<T, CareerOnDegreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerOnDegreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerOnDegree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerOnDegreeAggregateArgs>(args: Subset<T, CareerOnDegreeAggregateArgs>): Prisma.PrismaPromise<GetCareerOnDegreeAggregateType<T>>

    /**
     * Group by CareerOnDegree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerOnDegreeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerOnDegreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerOnDegreeGroupByArgs['orderBy'] }
        : { orderBy?: CareerOnDegreeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerOnDegreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerOnDegreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerOnDegree model
   */
  readonly fields: CareerOnDegreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerOnDegree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerOnDegreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    degree<T extends DegreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DegreeDefaultArgs<ExtArgs>>): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareerOnDegree model
   */
  interface CareerOnDegreeFieldRefs {
    readonly careerId: FieldRef<"CareerOnDegree", 'Int'>
    readonly degreeId: FieldRef<"CareerOnDegree", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CareerOnDegree findUnique
   */
  export type CareerOnDegreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter, which CareerOnDegree to fetch.
     */
    where: CareerOnDegreeWhereUniqueInput
  }

  /**
   * CareerOnDegree findUniqueOrThrow
   */
  export type CareerOnDegreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter, which CareerOnDegree to fetch.
     */
    where: CareerOnDegreeWhereUniqueInput
  }

  /**
   * CareerOnDegree findFirst
   */
  export type CareerOnDegreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter, which CareerOnDegree to fetch.
     */
    where?: CareerOnDegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerOnDegrees to fetch.
     */
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerOnDegrees.
     */
    cursor?: CareerOnDegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerOnDegrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerOnDegrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerOnDegrees.
     */
    distinct?: CareerOnDegreeScalarFieldEnum | CareerOnDegreeScalarFieldEnum[]
  }

  /**
   * CareerOnDegree findFirstOrThrow
   */
  export type CareerOnDegreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter, which CareerOnDegree to fetch.
     */
    where?: CareerOnDegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerOnDegrees to fetch.
     */
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerOnDegrees.
     */
    cursor?: CareerOnDegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerOnDegrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerOnDegrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerOnDegrees.
     */
    distinct?: CareerOnDegreeScalarFieldEnum | CareerOnDegreeScalarFieldEnum[]
  }

  /**
   * CareerOnDegree findMany
   */
  export type CareerOnDegreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter, which CareerOnDegrees to fetch.
     */
    where?: CareerOnDegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerOnDegrees to fetch.
     */
    orderBy?: CareerOnDegreeOrderByWithRelationInput | CareerOnDegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerOnDegrees.
     */
    cursor?: CareerOnDegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerOnDegrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerOnDegrees.
     */
    skip?: number
    distinct?: CareerOnDegreeScalarFieldEnum | CareerOnDegreeScalarFieldEnum[]
  }

  /**
   * CareerOnDegree create
   */
  export type CareerOnDegreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * The data needed to create a CareerOnDegree.
     */
    data: XOR<CareerOnDegreeCreateInput, CareerOnDegreeUncheckedCreateInput>
  }

  /**
   * CareerOnDegree createMany
   */
  export type CareerOnDegreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareerOnDegrees.
     */
    data: CareerOnDegreeCreateManyInput | CareerOnDegreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerOnDegree createManyAndReturn
   */
  export type CareerOnDegreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * The data used to create many CareerOnDegrees.
     */
    data: CareerOnDegreeCreateManyInput | CareerOnDegreeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerOnDegree update
   */
  export type CareerOnDegreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * The data needed to update a CareerOnDegree.
     */
    data: XOR<CareerOnDegreeUpdateInput, CareerOnDegreeUncheckedUpdateInput>
    /**
     * Choose, which CareerOnDegree to update.
     */
    where: CareerOnDegreeWhereUniqueInput
  }

  /**
   * CareerOnDegree updateMany
   */
  export type CareerOnDegreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerOnDegrees.
     */
    data: XOR<CareerOnDegreeUpdateManyMutationInput, CareerOnDegreeUncheckedUpdateManyInput>
    /**
     * Filter which CareerOnDegrees to update
     */
    where?: CareerOnDegreeWhereInput
    /**
     * Limit how many CareerOnDegrees to update.
     */
    limit?: number
  }

  /**
   * CareerOnDegree updateManyAndReturn
   */
  export type CareerOnDegreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * The data used to update CareerOnDegrees.
     */
    data: XOR<CareerOnDegreeUpdateManyMutationInput, CareerOnDegreeUncheckedUpdateManyInput>
    /**
     * Filter which CareerOnDegrees to update
     */
    where?: CareerOnDegreeWhereInput
    /**
     * Limit how many CareerOnDegrees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerOnDegree upsert
   */
  export type CareerOnDegreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * The filter to search for the CareerOnDegree to update in case it exists.
     */
    where: CareerOnDegreeWhereUniqueInput
    /**
     * In case the CareerOnDegree found by the `where` argument doesn't exist, create a new CareerOnDegree with this data.
     */
    create: XOR<CareerOnDegreeCreateInput, CareerOnDegreeUncheckedCreateInput>
    /**
     * In case the CareerOnDegree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerOnDegreeUpdateInput, CareerOnDegreeUncheckedUpdateInput>
  }

  /**
   * CareerOnDegree delete
   */
  export type CareerOnDegreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
    /**
     * Filter which CareerOnDegree to delete.
     */
    where: CareerOnDegreeWhereUniqueInput
  }

  /**
   * CareerOnDegree deleteMany
   */
  export type CareerOnDegreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerOnDegrees to delete
     */
    where?: CareerOnDegreeWhereInput
    /**
     * Limit how many CareerOnDegrees to delete.
     */
    limit?: number
  }

  /**
   * CareerOnDegree without action
   */
  export type CareerOnDegreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerOnDegree
     */
    select?: CareerOnDegreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerOnDegree
     */
    omit?: CareerOnDegreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerOnDegreeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    otp: 'otp',
    createdAt: 'createdAt',
    hasProfile: 'hasProfile'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    age: 'age',
    sex: 'sex',
    state: 'state',
    district: 'district',
    classLevel: 'classLevel',
    category: 'category'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const PassionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PassionScalarFieldEnum = (typeof PassionScalarFieldEnum)[keyof typeof PassionScalarFieldEnum]


  export const SkillOnProfileScalarFieldEnum: {
    profileId: 'profileId',
    skillId: 'skillId'
  };

  export type SkillOnProfileScalarFieldEnum = (typeof SkillOnProfileScalarFieldEnum)[keyof typeof SkillOnProfileScalarFieldEnum]


  export const InterestOnProfileScalarFieldEnum: {
    profileId: 'profileId',
    interestId: 'interestId'
  };

  export type InterestOnProfileScalarFieldEnum = (typeof InterestOnProfileScalarFieldEnum)[keyof typeof InterestOnProfileScalarFieldEnum]


  export const PassionOnProfileScalarFieldEnum: {
    profileId: 'profileId',
    passionId: 'passionId'
  };

  export type PassionOnProfileScalarFieldEnum = (typeof PassionOnProfileScalarFieldEnum)[keyof typeof PassionOnProfileScalarFieldEnum]


  export const AptitudeTestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateTaken: 'dateTaken',
    scores: 'scores',
    total: 'total'
  };

  export type AptitudeTestScalarFieldEnum = (typeof AptitudeTestScalarFieldEnum)[keyof typeof AptitudeTestScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const DegreeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    field: 'field'
  };

  export type DegreeScalarFieldEnum = (typeof DegreeScalarFieldEnum)[keyof typeof DegreeScalarFieldEnum]


  export const DegreeOnCollegeScalarFieldEnum: {
    collegeId: 'collegeId',
    degreeId: 'degreeId'
  };

  export type DegreeOnCollegeScalarFieldEnum = (typeof DegreeOnCollegeScalarFieldEnum)[keyof typeof DegreeOnCollegeScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    salary: 'salary'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const InterestOnCareerScalarFieldEnum: {
    careerId: 'careerId',
    interestId: 'interestId'
  };

  export type InterestOnCareerScalarFieldEnum = (typeof InterestOnCareerScalarFieldEnum)[keyof typeof InterestOnCareerScalarFieldEnum]


  export const SkillOnCareerScalarFieldEnum: {
    careerId: 'careerId',
    skillId: 'skillId'
  };

  export type SkillOnCareerScalarFieldEnum = (typeof SkillOnCareerScalarFieldEnum)[keyof typeof SkillOnCareerScalarFieldEnum]


  export const CareerOnDegreeScalarFieldEnum: {
    careerId: 'careerId',
    degreeId: 'degreeId'
  };

  export type CareerOnDegreeScalarFieldEnum = (typeof CareerOnDegreeScalarFieldEnum)[keyof typeof CareerOnDegreeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    hasProfile?: BoolFilter<"User"> | boolean
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hasProfile?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    otp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    hasProfile?: BoolFilter<"User"> | boolean
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hasProfile?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hasProfile?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    age?: IntNullableFilter<"Profile"> | number | null
    sex?: StringNullableFilter<"Profile"> | string | null
    state?: StringNullableFilter<"Profile"> | string | null
    district?: StringNullableFilter<"Profile"> | string | null
    classLevel?: StringNullableFilter<"Profile"> | string | null
    category?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    aptitudeTests?: AptitudeTestListRelationFilter
    skills?: SkillOnProfileListRelationFilter
    interests?: InterestOnProfileListRelationFilter
    passions?: PassionOnProfileListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    classLevel?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    aptitudeTests?: AptitudeTestOrderByRelationAggregateInput
    skills?: SkillOnProfileOrderByRelationAggregateInput
    interests?: InterestOnProfileOrderByRelationAggregateInput
    passions?: PassionOnProfileOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    age?: IntNullableFilter<"Profile"> | number | null
    sex?: StringNullableFilter<"Profile"> | string | null
    state?: StringNullableFilter<"Profile"> | string | null
    district?: StringNullableFilter<"Profile"> | string | null
    classLevel?: StringNullableFilter<"Profile"> | string | null
    category?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    aptitudeTests?: AptitudeTestListRelationFilter
    skills?: SkillOnProfileListRelationFilter
    interests?: InterestOnProfileListRelationFilter
    passions?: PassionOnProfileListRelationFilter
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    classLevel?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    sex?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    state?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    district?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    classLevel?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    category?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    users?: SkillOnProfileListRelationFilter
    careers?: SkillOnCareerListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: SkillOnProfileOrderByRelationAggregateInput
    careers?: SkillOnCareerOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    users?: SkillOnProfileListRelationFilter
    careers?: SkillOnCareerListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: IntFilter<"Interest"> | number
    name?: StringFilter<"Interest"> | string
    users?: InterestOnProfileListRelationFilter
    careers?: InterestOnCareerListRelationFilter
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: InterestOnProfileOrderByRelationAggregateInput
    careers?: InterestOnCareerOrderByRelationAggregateInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    users?: InterestOnProfileListRelationFilter
    careers?: InterestOnCareerListRelationFilter
  }, "id" | "name">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _avg?: InterestAvgOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
    _sum?: InterestSumOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interest"> | number
    name?: StringWithAggregatesFilter<"Interest"> | string
  }

  export type PassionWhereInput = {
    AND?: PassionWhereInput | PassionWhereInput[]
    OR?: PassionWhereInput[]
    NOT?: PassionWhereInput | PassionWhereInput[]
    id?: IntFilter<"Passion"> | number
    name?: StringFilter<"Passion"> | string
    users?: PassionOnProfileListRelationFilter
  }

  export type PassionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: PassionOnProfileOrderByRelationAggregateInput
  }

  export type PassionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PassionWhereInput | PassionWhereInput[]
    OR?: PassionWhereInput[]
    NOT?: PassionWhereInput | PassionWhereInput[]
    users?: PassionOnProfileListRelationFilter
  }, "id" | "name">

  export type PassionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PassionCountOrderByAggregateInput
    _avg?: PassionAvgOrderByAggregateInput
    _max?: PassionMaxOrderByAggregateInput
    _min?: PassionMinOrderByAggregateInput
    _sum?: PassionSumOrderByAggregateInput
  }

  export type PassionScalarWhereWithAggregatesInput = {
    AND?: PassionScalarWhereWithAggregatesInput | PassionScalarWhereWithAggregatesInput[]
    OR?: PassionScalarWhereWithAggregatesInput[]
    NOT?: PassionScalarWhereWithAggregatesInput | PassionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Passion"> | number
    name?: StringWithAggregatesFilter<"Passion"> | string
  }

  export type SkillOnProfileWhereInput = {
    AND?: SkillOnProfileWhereInput | SkillOnProfileWhereInput[]
    OR?: SkillOnProfileWhereInput[]
    NOT?: SkillOnProfileWhereInput | SkillOnProfileWhereInput[]
    profileId?: IntFilter<"SkillOnProfile"> | number
    skillId?: IntFilter<"SkillOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type SkillOnProfileOrderByWithRelationInput = {
    profileId?: SortOrder
    skillId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type SkillOnProfileWhereUniqueInput = Prisma.AtLeast<{
    profileId_skillId?: SkillOnProfileProfileIdSkillIdCompoundUniqueInput
    AND?: SkillOnProfileWhereInput | SkillOnProfileWhereInput[]
    OR?: SkillOnProfileWhereInput[]
    NOT?: SkillOnProfileWhereInput | SkillOnProfileWhereInput[]
    profileId?: IntFilter<"SkillOnProfile"> | number
    skillId?: IntFilter<"SkillOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "profileId_skillId">

  export type SkillOnProfileOrderByWithAggregationInput = {
    profileId?: SortOrder
    skillId?: SortOrder
    _count?: SkillOnProfileCountOrderByAggregateInput
    _avg?: SkillOnProfileAvgOrderByAggregateInput
    _max?: SkillOnProfileMaxOrderByAggregateInput
    _min?: SkillOnProfileMinOrderByAggregateInput
    _sum?: SkillOnProfileSumOrderByAggregateInput
  }

  export type SkillOnProfileScalarWhereWithAggregatesInput = {
    AND?: SkillOnProfileScalarWhereWithAggregatesInput | SkillOnProfileScalarWhereWithAggregatesInput[]
    OR?: SkillOnProfileScalarWhereWithAggregatesInput[]
    NOT?: SkillOnProfileScalarWhereWithAggregatesInput | SkillOnProfileScalarWhereWithAggregatesInput[]
    profileId?: IntWithAggregatesFilter<"SkillOnProfile"> | number
    skillId?: IntWithAggregatesFilter<"SkillOnProfile"> | number
  }

  export type InterestOnProfileWhereInput = {
    AND?: InterestOnProfileWhereInput | InterestOnProfileWhereInput[]
    OR?: InterestOnProfileWhereInput[]
    NOT?: InterestOnProfileWhereInput | InterestOnProfileWhereInput[]
    profileId?: IntFilter<"InterestOnProfile"> | number
    interestId?: IntFilter<"InterestOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }

  export type InterestOnProfileOrderByWithRelationInput = {
    profileId?: SortOrder
    interestId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    interest?: InterestOrderByWithRelationInput
  }

  export type InterestOnProfileWhereUniqueInput = Prisma.AtLeast<{
    profileId_interestId?: InterestOnProfileProfileIdInterestIdCompoundUniqueInput
    AND?: InterestOnProfileWhereInput | InterestOnProfileWhereInput[]
    OR?: InterestOnProfileWhereInput[]
    NOT?: InterestOnProfileWhereInput | InterestOnProfileWhereInput[]
    profileId?: IntFilter<"InterestOnProfile"> | number
    interestId?: IntFilter<"InterestOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }, "profileId_interestId">

  export type InterestOnProfileOrderByWithAggregationInput = {
    profileId?: SortOrder
    interestId?: SortOrder
    _count?: InterestOnProfileCountOrderByAggregateInput
    _avg?: InterestOnProfileAvgOrderByAggregateInput
    _max?: InterestOnProfileMaxOrderByAggregateInput
    _min?: InterestOnProfileMinOrderByAggregateInput
    _sum?: InterestOnProfileSumOrderByAggregateInput
  }

  export type InterestOnProfileScalarWhereWithAggregatesInput = {
    AND?: InterestOnProfileScalarWhereWithAggregatesInput | InterestOnProfileScalarWhereWithAggregatesInput[]
    OR?: InterestOnProfileScalarWhereWithAggregatesInput[]
    NOT?: InterestOnProfileScalarWhereWithAggregatesInput | InterestOnProfileScalarWhereWithAggregatesInput[]
    profileId?: IntWithAggregatesFilter<"InterestOnProfile"> | number
    interestId?: IntWithAggregatesFilter<"InterestOnProfile"> | number
  }

  export type PassionOnProfileWhereInput = {
    AND?: PassionOnProfileWhereInput | PassionOnProfileWhereInput[]
    OR?: PassionOnProfileWhereInput[]
    NOT?: PassionOnProfileWhereInput | PassionOnProfileWhereInput[]
    profileId?: IntFilter<"PassionOnProfile"> | number
    passionId?: IntFilter<"PassionOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    passion?: XOR<PassionScalarRelationFilter, PassionWhereInput>
  }

  export type PassionOnProfileOrderByWithRelationInput = {
    profileId?: SortOrder
    passionId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    passion?: PassionOrderByWithRelationInput
  }

  export type PassionOnProfileWhereUniqueInput = Prisma.AtLeast<{
    profileId_passionId?: PassionOnProfileProfileIdPassionIdCompoundUniqueInput
    AND?: PassionOnProfileWhereInput | PassionOnProfileWhereInput[]
    OR?: PassionOnProfileWhereInput[]
    NOT?: PassionOnProfileWhereInput | PassionOnProfileWhereInput[]
    profileId?: IntFilter<"PassionOnProfile"> | number
    passionId?: IntFilter<"PassionOnProfile"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    passion?: XOR<PassionScalarRelationFilter, PassionWhereInput>
  }, "profileId_passionId">

  export type PassionOnProfileOrderByWithAggregationInput = {
    profileId?: SortOrder
    passionId?: SortOrder
    _count?: PassionOnProfileCountOrderByAggregateInput
    _avg?: PassionOnProfileAvgOrderByAggregateInput
    _max?: PassionOnProfileMaxOrderByAggregateInput
    _min?: PassionOnProfileMinOrderByAggregateInput
    _sum?: PassionOnProfileSumOrderByAggregateInput
  }

  export type PassionOnProfileScalarWhereWithAggregatesInput = {
    AND?: PassionOnProfileScalarWhereWithAggregatesInput | PassionOnProfileScalarWhereWithAggregatesInput[]
    OR?: PassionOnProfileScalarWhereWithAggregatesInput[]
    NOT?: PassionOnProfileScalarWhereWithAggregatesInput | PassionOnProfileScalarWhereWithAggregatesInput[]
    profileId?: IntWithAggregatesFilter<"PassionOnProfile"> | number
    passionId?: IntWithAggregatesFilter<"PassionOnProfile"> | number
  }

  export type AptitudeTestWhereInput = {
    AND?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    OR?: AptitudeTestWhereInput[]
    NOT?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    id?: IntFilter<"AptitudeTest"> | number
    userId?: IntFilter<"AptitudeTest"> | number
    dateTaken?: DateTimeFilter<"AptitudeTest"> | Date | string
    scores?: JsonFilter<"AptitudeTest">
    total?: IntFilter<"AptitudeTest"> | number
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AptitudeTestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateTaken?: SortOrder
    scores?: SortOrder
    total?: SortOrder
    user?: ProfileOrderByWithRelationInput
  }

  export type AptitudeTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    OR?: AptitudeTestWhereInput[]
    NOT?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    userId?: IntFilter<"AptitudeTest"> | number
    dateTaken?: DateTimeFilter<"AptitudeTest"> | Date | string
    scores?: JsonFilter<"AptitudeTest">
    total?: IntFilter<"AptitudeTest"> | number
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type AptitudeTestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateTaken?: SortOrder
    scores?: SortOrder
    total?: SortOrder
    _count?: AptitudeTestCountOrderByAggregateInput
    _avg?: AptitudeTestAvgOrderByAggregateInput
    _max?: AptitudeTestMaxOrderByAggregateInput
    _min?: AptitudeTestMinOrderByAggregateInput
    _sum?: AptitudeTestSumOrderByAggregateInput
  }

  export type AptitudeTestScalarWhereWithAggregatesInput = {
    AND?: AptitudeTestScalarWhereWithAggregatesInput | AptitudeTestScalarWhereWithAggregatesInput[]
    OR?: AptitudeTestScalarWhereWithAggregatesInput[]
    NOT?: AptitudeTestScalarWhereWithAggregatesInput | AptitudeTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AptitudeTest"> | number
    userId?: IntWithAggregatesFilter<"AptitudeTest"> | number
    dateTaken?: DateTimeWithAggregatesFilter<"AptitudeTest"> | Date | string
    scores?: JsonWithAggregatesFilter<"AptitudeTest">
    total?: IntWithAggregatesFilter<"AptitudeTest"> | number
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: IntFilter<"College"> | number
    name?: StringFilter<"College"> | string
    location?: StringFilter<"College"> | string
    degrees?: DegreeOnCollegeListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    degrees?: DegreeOnCollegeOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    name?: StringFilter<"College"> | string
    location?: StringFilter<"College"> | string
    degrees?: DegreeOnCollegeListRelationFilter
  }, "id">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"College"> | number
    name?: StringWithAggregatesFilter<"College"> | string
    location?: StringWithAggregatesFilter<"College"> | string
  }

  export type DegreeWhereInput = {
    AND?: DegreeWhereInput | DegreeWhereInput[]
    OR?: DegreeWhereInput[]
    NOT?: DegreeWhereInput | DegreeWhereInput[]
    id?: IntFilter<"Degree"> | number
    name?: StringFilter<"Degree"> | string
    field?: StringFilter<"Degree"> | string
    careers?: CareerOnDegreeListRelationFilter
    colleges?: DegreeOnCollegeListRelationFilter
  }

  export type DegreeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    field?: SortOrder
    careers?: CareerOnDegreeOrderByRelationAggregateInput
    colleges?: DegreeOnCollegeOrderByRelationAggregateInput
  }

  export type DegreeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DegreeWhereInput | DegreeWhereInput[]
    OR?: DegreeWhereInput[]
    NOT?: DegreeWhereInput | DegreeWhereInput[]
    name?: StringFilter<"Degree"> | string
    field?: StringFilter<"Degree"> | string
    careers?: CareerOnDegreeListRelationFilter
    colleges?: DegreeOnCollegeListRelationFilter
  }, "id">

  export type DegreeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    field?: SortOrder
    _count?: DegreeCountOrderByAggregateInput
    _avg?: DegreeAvgOrderByAggregateInput
    _max?: DegreeMaxOrderByAggregateInput
    _min?: DegreeMinOrderByAggregateInput
    _sum?: DegreeSumOrderByAggregateInput
  }

  export type DegreeScalarWhereWithAggregatesInput = {
    AND?: DegreeScalarWhereWithAggregatesInput | DegreeScalarWhereWithAggregatesInput[]
    OR?: DegreeScalarWhereWithAggregatesInput[]
    NOT?: DegreeScalarWhereWithAggregatesInput | DegreeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Degree"> | number
    name?: StringWithAggregatesFilter<"Degree"> | string
    field?: StringWithAggregatesFilter<"Degree"> | string
  }

  export type DegreeOnCollegeWhereInput = {
    AND?: DegreeOnCollegeWhereInput | DegreeOnCollegeWhereInput[]
    OR?: DegreeOnCollegeWhereInput[]
    NOT?: DegreeOnCollegeWhereInput | DegreeOnCollegeWhereInput[]
    collegeId?: IntFilter<"DegreeOnCollege"> | number
    degreeId?: IntFilter<"DegreeOnCollege"> | number
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    degree?: XOR<DegreeScalarRelationFilter, DegreeWhereInput>
  }

  export type DegreeOnCollegeOrderByWithRelationInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
    college?: CollegeOrderByWithRelationInput
    degree?: DegreeOrderByWithRelationInput
  }

  export type DegreeOnCollegeWhereUniqueInput = Prisma.AtLeast<{
    collegeId_degreeId?: DegreeOnCollegeCollegeIdDegreeIdCompoundUniqueInput
    AND?: DegreeOnCollegeWhereInput | DegreeOnCollegeWhereInput[]
    OR?: DegreeOnCollegeWhereInput[]
    NOT?: DegreeOnCollegeWhereInput | DegreeOnCollegeWhereInput[]
    collegeId?: IntFilter<"DegreeOnCollege"> | number
    degreeId?: IntFilter<"DegreeOnCollege"> | number
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    degree?: XOR<DegreeScalarRelationFilter, DegreeWhereInput>
  }, "collegeId_degreeId">

  export type DegreeOnCollegeOrderByWithAggregationInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
    _count?: DegreeOnCollegeCountOrderByAggregateInput
    _avg?: DegreeOnCollegeAvgOrderByAggregateInput
    _max?: DegreeOnCollegeMaxOrderByAggregateInput
    _min?: DegreeOnCollegeMinOrderByAggregateInput
    _sum?: DegreeOnCollegeSumOrderByAggregateInput
  }

  export type DegreeOnCollegeScalarWhereWithAggregatesInput = {
    AND?: DegreeOnCollegeScalarWhereWithAggregatesInput | DegreeOnCollegeScalarWhereWithAggregatesInput[]
    OR?: DegreeOnCollegeScalarWhereWithAggregatesInput[]
    NOT?: DegreeOnCollegeScalarWhereWithAggregatesInput | DegreeOnCollegeScalarWhereWithAggregatesInput[]
    collegeId?: IntWithAggregatesFilter<"DegreeOnCollege"> | number
    degreeId?: IntWithAggregatesFilter<"DegreeOnCollege"> | number
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: IntFilter<"Career"> | number
    userId?: IntFilter<"Career"> | number
    title?: StringFilter<"Career"> | string
    description?: StringFilter<"Career"> | string
    salary?: IntNullableFilter<"Career"> | number | null
    skillsRequired?: SkillOnCareerListRelationFilter
    interestRequired?: InterestOnCareerListRelationFilter
    degreesRequired?: CareerOnDegreeListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrderInput | SortOrder
    skillsRequired?: SkillOnCareerOrderByRelationAggregateInput
    interestRequired?: InterestOnCareerOrderByRelationAggregateInput
    degreesRequired?: CareerOnDegreeOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    userId?: IntFilter<"Career"> | number
    description?: StringFilter<"Career"> | string
    salary?: IntNullableFilter<"Career"> | number | null
    skillsRequired?: SkillOnCareerListRelationFilter
    interestRequired?: InterestOnCareerListRelationFilter
    degreesRequired?: CareerOnDegreeListRelationFilter
  }, "id" | "title">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrderInput | SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Career"> | number
    userId?: IntWithAggregatesFilter<"Career"> | number
    title?: StringWithAggregatesFilter<"Career"> | string
    description?: StringWithAggregatesFilter<"Career"> | string
    salary?: IntNullableWithAggregatesFilter<"Career"> | number | null
  }

  export type InterestOnCareerWhereInput = {
    AND?: InterestOnCareerWhereInput | InterestOnCareerWhereInput[]
    OR?: InterestOnCareerWhereInput[]
    NOT?: InterestOnCareerWhereInput | InterestOnCareerWhereInput[]
    careerId?: IntFilter<"InterestOnCareer"> | number
    interestId?: IntFilter<"InterestOnCareer"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }

  export type InterestOnCareerOrderByWithRelationInput = {
    careerId?: SortOrder
    interestId?: SortOrder
    career?: CareerOrderByWithRelationInput
    interest?: InterestOrderByWithRelationInput
  }

  export type InterestOnCareerWhereUniqueInput = Prisma.AtLeast<{
    careerId_interestId?: InterestOnCareerCareerIdInterestIdCompoundUniqueInput
    AND?: InterestOnCareerWhereInput | InterestOnCareerWhereInput[]
    OR?: InterestOnCareerWhereInput[]
    NOT?: InterestOnCareerWhereInput | InterestOnCareerWhereInput[]
    careerId?: IntFilter<"InterestOnCareer"> | number
    interestId?: IntFilter<"InterestOnCareer"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }, "careerId_interestId">

  export type InterestOnCareerOrderByWithAggregationInput = {
    careerId?: SortOrder
    interestId?: SortOrder
    _count?: InterestOnCareerCountOrderByAggregateInput
    _avg?: InterestOnCareerAvgOrderByAggregateInput
    _max?: InterestOnCareerMaxOrderByAggregateInput
    _min?: InterestOnCareerMinOrderByAggregateInput
    _sum?: InterestOnCareerSumOrderByAggregateInput
  }

  export type InterestOnCareerScalarWhereWithAggregatesInput = {
    AND?: InterestOnCareerScalarWhereWithAggregatesInput | InterestOnCareerScalarWhereWithAggregatesInput[]
    OR?: InterestOnCareerScalarWhereWithAggregatesInput[]
    NOT?: InterestOnCareerScalarWhereWithAggregatesInput | InterestOnCareerScalarWhereWithAggregatesInput[]
    careerId?: IntWithAggregatesFilter<"InterestOnCareer"> | number
    interestId?: IntWithAggregatesFilter<"InterestOnCareer"> | number
  }

  export type SkillOnCareerWhereInput = {
    AND?: SkillOnCareerWhereInput | SkillOnCareerWhereInput[]
    OR?: SkillOnCareerWhereInput[]
    NOT?: SkillOnCareerWhereInput | SkillOnCareerWhereInput[]
    careerId?: IntFilter<"SkillOnCareer"> | number
    skillId?: IntFilter<"SkillOnCareer"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type SkillOnCareerOrderByWithRelationInput = {
    careerId?: SortOrder
    skillId?: SortOrder
    career?: CareerOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type SkillOnCareerWhereUniqueInput = Prisma.AtLeast<{
    careerId_skillId?: SkillOnCareerCareerIdSkillIdCompoundUniqueInput
    AND?: SkillOnCareerWhereInput | SkillOnCareerWhereInput[]
    OR?: SkillOnCareerWhereInput[]
    NOT?: SkillOnCareerWhereInput | SkillOnCareerWhereInput[]
    careerId?: IntFilter<"SkillOnCareer"> | number
    skillId?: IntFilter<"SkillOnCareer"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "careerId_skillId">

  export type SkillOnCareerOrderByWithAggregationInput = {
    careerId?: SortOrder
    skillId?: SortOrder
    _count?: SkillOnCareerCountOrderByAggregateInput
    _avg?: SkillOnCareerAvgOrderByAggregateInput
    _max?: SkillOnCareerMaxOrderByAggregateInput
    _min?: SkillOnCareerMinOrderByAggregateInput
    _sum?: SkillOnCareerSumOrderByAggregateInput
  }

  export type SkillOnCareerScalarWhereWithAggregatesInput = {
    AND?: SkillOnCareerScalarWhereWithAggregatesInput | SkillOnCareerScalarWhereWithAggregatesInput[]
    OR?: SkillOnCareerScalarWhereWithAggregatesInput[]
    NOT?: SkillOnCareerScalarWhereWithAggregatesInput | SkillOnCareerScalarWhereWithAggregatesInput[]
    careerId?: IntWithAggregatesFilter<"SkillOnCareer"> | number
    skillId?: IntWithAggregatesFilter<"SkillOnCareer"> | number
  }

  export type CareerOnDegreeWhereInput = {
    AND?: CareerOnDegreeWhereInput | CareerOnDegreeWhereInput[]
    OR?: CareerOnDegreeWhereInput[]
    NOT?: CareerOnDegreeWhereInput | CareerOnDegreeWhereInput[]
    careerId?: IntFilter<"CareerOnDegree"> | number
    degreeId?: IntFilter<"CareerOnDegree"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    degree?: XOR<DegreeScalarRelationFilter, DegreeWhereInput>
  }

  export type CareerOnDegreeOrderByWithRelationInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
    career?: CareerOrderByWithRelationInput
    degree?: DegreeOrderByWithRelationInput
  }

  export type CareerOnDegreeWhereUniqueInput = Prisma.AtLeast<{
    careerId_degreeId?: CareerOnDegreeCareerIdDegreeIdCompoundUniqueInput
    AND?: CareerOnDegreeWhereInput | CareerOnDegreeWhereInput[]
    OR?: CareerOnDegreeWhereInput[]
    NOT?: CareerOnDegreeWhereInput | CareerOnDegreeWhereInput[]
    careerId?: IntFilter<"CareerOnDegree"> | number
    degreeId?: IntFilter<"CareerOnDegree"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    degree?: XOR<DegreeScalarRelationFilter, DegreeWhereInput>
  }, "careerId_degreeId">

  export type CareerOnDegreeOrderByWithAggregationInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
    _count?: CareerOnDegreeCountOrderByAggregateInput
    _avg?: CareerOnDegreeAvgOrderByAggregateInput
    _max?: CareerOnDegreeMaxOrderByAggregateInput
    _min?: CareerOnDegreeMinOrderByAggregateInput
    _sum?: CareerOnDegreeSumOrderByAggregateInput
  }

  export type CareerOnDegreeScalarWhereWithAggregatesInput = {
    AND?: CareerOnDegreeScalarWhereWithAggregatesInput | CareerOnDegreeScalarWhereWithAggregatesInput[]
    OR?: CareerOnDegreeScalarWhereWithAggregatesInput[]
    NOT?: CareerOnDegreeScalarWhereWithAggregatesInput | CareerOnDegreeScalarWhereWithAggregatesInput[]
    careerId?: IntWithAggregatesFilter<"CareerOnDegree"> | number
    degreeId?: IntWithAggregatesFilter<"CareerOnDegree"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    otp?: string | null
    createdAt?: Date | string
    hasProfile?: boolean
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    otp?: string | null
    createdAt?: Date | string
    hasProfile?: boolean
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    otp?: string | null
    createdAt?: Date | string
    hasProfile?: boolean
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileCreateInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    aptitudeTests?: AptitudeTestCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    aptitudeTests?: AptitudeTestUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    name: string
    users?: SkillOnProfileCreateNestedManyWithoutSkillInput
    careers?: SkillOnCareerCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    users?: SkillOnProfileUncheckedCreateNestedManyWithoutSkillInput
    careers?: SkillOnCareerUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: SkillOnProfileUpdateManyWithoutSkillNestedInput
    careers?: SkillOnCareerUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: SkillOnProfileUncheckedUpdateManyWithoutSkillNestedInput
    careers?: SkillOnCareerUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestCreateInput = {
    name: string
    users?: InterestOnProfileCreateNestedManyWithoutInterestInput
    careers?: InterestOnCareerCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateInput = {
    id?: number
    name: string
    users?: InterestOnProfileUncheckedCreateNestedManyWithoutInterestInput
    careers?: InterestOnCareerUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: InterestOnProfileUpdateManyWithoutInterestNestedInput
    careers?: InterestOnCareerUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: InterestOnProfileUncheckedUpdateManyWithoutInterestNestedInput
    careers?: InterestOnCareerUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InterestCreateManyInput = {
    id?: number
    name: string
  }

  export type InterestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PassionCreateInput = {
    name: string
    users?: PassionOnProfileCreateNestedManyWithoutPassionInput
  }

  export type PassionUncheckedCreateInput = {
    id?: number
    name: string
    users?: PassionOnProfileUncheckedCreateNestedManyWithoutPassionInput
  }

  export type PassionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: PassionOnProfileUpdateManyWithoutPassionNestedInput
  }

  export type PassionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: PassionOnProfileUncheckedUpdateManyWithoutPassionNestedInput
  }

  export type PassionCreateManyInput = {
    id?: number
    name: string
  }

  export type PassionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PassionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillOnProfileCreateInput = {
    profile: ProfileCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type SkillOnProfileUncheckedCreateInput = {
    profileId: number
    skillId: number
  }

  export type SkillOnProfileUpdateInput = {
    profile?: ProfileUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SkillOnProfileUncheckedUpdateInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnProfileCreateManyInput = {
    profileId: number
    skillId: number
  }

  export type SkillOnProfileUpdateManyMutationInput = {

  }

  export type SkillOnProfileUncheckedUpdateManyInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileCreateInput = {
    profile: ProfileCreateNestedOneWithoutInterestsInput
    interest: InterestCreateNestedOneWithoutUsersInput
  }

  export type InterestOnProfileUncheckedCreateInput = {
    profileId: number
    interestId: number
  }

  export type InterestOnProfileUpdateInput = {
    profile?: ProfileUpdateOneRequiredWithoutInterestsNestedInput
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type InterestOnProfileUncheckedUpdateInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileCreateManyInput = {
    profileId: number
    interestId: number
  }

  export type InterestOnProfileUpdateManyMutationInput = {

  }

  export type InterestOnProfileUncheckedUpdateManyInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileCreateInput = {
    profile: ProfileCreateNestedOneWithoutPassionsInput
    passion: PassionCreateNestedOneWithoutUsersInput
  }

  export type PassionOnProfileUncheckedCreateInput = {
    profileId: number
    passionId: number
  }

  export type PassionOnProfileUpdateInput = {
    profile?: ProfileUpdateOneRequiredWithoutPassionsNestedInput
    passion?: PassionUpdateOneRequiredWithoutUsersNestedInput
  }

  export type PassionOnProfileUncheckedUpdateInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    passionId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileCreateManyInput = {
    profileId: number
    passionId: number
  }

  export type PassionOnProfileUpdateManyMutationInput = {

  }

  export type PassionOnProfileUncheckedUpdateManyInput = {
    profileId?: IntFieldUpdateOperationsInput | number
    passionId?: IntFieldUpdateOperationsInput | number
  }

  export type AptitudeTestCreateInput = {
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
    user: ProfileCreateNestedOneWithoutAptitudeTestsInput
  }

  export type AptitudeTestUncheckedCreateInput = {
    id?: number
    userId: number
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
  }

  export type AptitudeTestUpdateInput = {
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
    user?: ProfileUpdateOneRequiredWithoutAptitudeTestsNestedInput
  }

  export type AptitudeTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type AptitudeTestCreateManyInput = {
    id?: number
    userId: number
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
  }

  export type AptitudeTestUpdateManyMutationInput = {
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type AptitudeTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type CollegeCreateInput = {
    name: string
    location: string
    degrees?: DegreeOnCollegeCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    degrees?: DegreeOnCollegeUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    degrees?: DegreeOnCollegeUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    degrees?: DegreeOnCollegeUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: number
    name: string
    location: string
  }

  export type CollegeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DegreeCreateInput = {
    name: string
    field: string
    careers?: CareerOnDegreeCreateNestedManyWithoutDegreeInput
    colleges?: DegreeOnCollegeCreateNestedManyWithoutDegreeInput
  }

  export type DegreeUncheckedCreateInput = {
    id?: number
    name: string
    field: string
    careers?: CareerOnDegreeUncheckedCreateNestedManyWithoutDegreeInput
    colleges?: DegreeOnCollegeUncheckedCreateNestedManyWithoutDegreeInput
  }

  export type DegreeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    careers?: CareerOnDegreeUpdateManyWithoutDegreeNestedInput
    colleges?: DegreeOnCollegeUpdateManyWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    careers?: CareerOnDegreeUncheckedUpdateManyWithoutDegreeNestedInput
    colleges?: DegreeOnCollegeUncheckedUpdateManyWithoutDegreeNestedInput
  }

  export type DegreeCreateManyInput = {
    id?: number
    name: string
    field: string
  }

  export type DegreeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type DegreeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type DegreeOnCollegeCreateInput = {
    college: CollegeCreateNestedOneWithoutDegreesInput
    degree: DegreeCreateNestedOneWithoutCollegesInput
  }

  export type DegreeOnCollegeUncheckedCreateInput = {
    collegeId: number
    degreeId: number
  }

  export type DegreeOnCollegeUpdateInput = {
    college?: CollegeUpdateOneRequiredWithoutDegreesNestedInput
    degree?: DegreeUpdateOneRequiredWithoutCollegesNestedInput
  }

  export type DegreeOnCollegeUncheckedUpdateInput = {
    collegeId?: IntFieldUpdateOperationsInput | number
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type DegreeOnCollegeCreateManyInput = {
    collegeId: number
    degreeId: number
  }

  export type DegreeOnCollegeUpdateManyMutationInput = {

  }

  export type DegreeOnCollegeUncheckedUpdateManyInput = {
    collegeId?: IntFieldUpdateOperationsInput | number
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerCreateInput = {
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerCreateNestedManyWithoutCareerInput
    interestRequired?: InterestOnCareerCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerUncheckedCreateNestedManyWithoutCareerInput
    interestRequired?: InterestOnCareerUncheckedCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUpdateManyWithoutCareerNestedInput
    interestRequired?: InterestOnCareerUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUncheckedUpdateManyWithoutCareerNestedInput
    interestRequired?: InterestOnCareerUncheckedUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: number
    userId: number
    title: string
    description: string
    salary?: number | null
  }

  export type CareerUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterestOnCareerCreateInput = {
    career: CareerCreateNestedOneWithoutInterestRequiredInput
    interest: InterestCreateNestedOneWithoutCareersInput
  }

  export type InterestOnCareerUncheckedCreateInput = {
    careerId: number
    interestId: number
  }

  export type InterestOnCareerUpdateInput = {
    career?: CareerUpdateOneRequiredWithoutInterestRequiredNestedInput
    interest?: InterestUpdateOneRequiredWithoutCareersNestedInput
  }

  export type InterestOnCareerUncheckedUpdateInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnCareerCreateManyInput = {
    careerId: number
    interestId: number
  }

  export type InterestOnCareerUpdateManyMutationInput = {

  }

  export type InterestOnCareerUncheckedUpdateManyInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerCreateInput = {
    career: CareerCreateNestedOneWithoutSkillsRequiredInput
    skill: SkillCreateNestedOneWithoutCareersInput
  }

  export type SkillOnCareerUncheckedCreateInput = {
    careerId: number
    skillId: number
  }

  export type SkillOnCareerUpdateInput = {
    career?: CareerUpdateOneRequiredWithoutSkillsRequiredNestedInput
    skill?: SkillUpdateOneRequiredWithoutCareersNestedInput
  }

  export type SkillOnCareerUncheckedUpdateInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerCreateManyInput = {
    careerId: number
    skillId: number
  }

  export type SkillOnCareerUpdateManyMutationInput = {

  }

  export type SkillOnCareerUncheckedUpdateManyInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeCreateInput = {
    career: CareerCreateNestedOneWithoutDegreesRequiredInput
    degree: DegreeCreateNestedOneWithoutCareersInput
  }

  export type CareerOnDegreeUncheckedCreateInput = {
    careerId: number
    degreeId: number
  }

  export type CareerOnDegreeUpdateInput = {
    career?: CareerUpdateOneRequiredWithoutDegreesRequiredNestedInput
    degree?: DegreeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareerOnDegreeUncheckedUpdateInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeCreateManyInput = {
    careerId: number
    degreeId: number
  }

  export type CareerOnDegreeUpdateManyMutationInput = {

  }

  export type CareerOnDegreeUncheckedUpdateManyInput = {
    careerId?: IntFieldUpdateOperationsInput | number
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    hasProfile?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    hasProfile?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    hasProfile?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AptitudeTestListRelationFilter = {
    every?: AptitudeTestWhereInput
    some?: AptitudeTestWhereInput
    none?: AptitudeTestWhereInput
  }

  export type SkillOnProfileListRelationFilter = {
    every?: SkillOnProfileWhereInput
    some?: SkillOnProfileWhereInput
    none?: SkillOnProfileWhereInput
  }

  export type InterestOnProfileListRelationFilter = {
    every?: InterestOnProfileWhereInput
    some?: InterestOnProfileWhereInput
    none?: InterestOnProfileWhereInput
  }

  export type PassionOnProfileListRelationFilter = {
    every?: PassionOnProfileWhereInput
    some?: PassionOnProfileWhereInput
    none?: PassionOnProfileWhereInput
  }

  export type AptitudeTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOnProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterestOnProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PassionOnProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    state?: SortOrder
    district?: SortOrder
    classLevel?: SortOrder
    category?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    state?: SortOrder
    district?: SortOrder
    classLevel?: SortOrder
    category?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    state?: SortOrder
    district?: SortOrder
    classLevel?: SortOrder
    category?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SkillOnCareerListRelationFilter = {
    every?: SkillOnCareerWhereInput
    some?: SkillOnCareerWhereInput
    none?: SkillOnCareerWhereInput
  }

  export type SkillOnCareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterestOnCareerListRelationFilter = {
    every?: InterestOnCareerWhereInput
    some?: InterestOnCareerWhereInput
    none?: InterestOnCareerWhereInput
  }

  export type InterestOnCareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PassionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PassionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PassionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PassionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PassionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type SkillOnProfileProfileIdSkillIdCompoundUniqueInput = {
    profileId: number
    skillId: number
  }

  export type SkillOnProfileCountOrderByAggregateInput = {
    profileId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnProfileAvgOrderByAggregateInput = {
    profileId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnProfileMaxOrderByAggregateInput = {
    profileId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnProfileMinOrderByAggregateInput = {
    profileId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnProfileSumOrderByAggregateInput = {
    profileId?: SortOrder
    skillId?: SortOrder
  }

  export type InterestScalarRelationFilter = {
    is?: InterestWhereInput
    isNot?: InterestWhereInput
  }

  export type InterestOnProfileProfileIdInterestIdCompoundUniqueInput = {
    profileId: number
    interestId: number
  }

  export type InterestOnProfileCountOrderByAggregateInput = {
    profileId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnProfileAvgOrderByAggregateInput = {
    profileId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnProfileMaxOrderByAggregateInput = {
    profileId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnProfileMinOrderByAggregateInput = {
    profileId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnProfileSumOrderByAggregateInput = {
    profileId?: SortOrder
    interestId?: SortOrder
  }

  export type PassionScalarRelationFilter = {
    is?: PassionWhereInput
    isNot?: PassionWhereInput
  }

  export type PassionOnProfileProfileIdPassionIdCompoundUniqueInput = {
    profileId: number
    passionId: number
  }

  export type PassionOnProfileCountOrderByAggregateInput = {
    profileId?: SortOrder
    passionId?: SortOrder
  }

  export type PassionOnProfileAvgOrderByAggregateInput = {
    profileId?: SortOrder
    passionId?: SortOrder
  }

  export type PassionOnProfileMaxOrderByAggregateInput = {
    profileId?: SortOrder
    passionId?: SortOrder
  }

  export type PassionOnProfileMinOrderByAggregateInput = {
    profileId?: SortOrder
    passionId?: SortOrder
  }

  export type PassionOnProfileSumOrderByAggregateInput = {
    profileId?: SortOrder
    passionId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AptitudeTestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateTaken?: SortOrder
    scores?: SortOrder
    total?: SortOrder
  }

  export type AptitudeTestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
  }

  export type AptitudeTestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateTaken?: SortOrder
    total?: SortOrder
  }

  export type AptitudeTestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateTaken?: SortOrder
    total?: SortOrder
  }

  export type AptitudeTestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DegreeOnCollegeListRelationFilter = {
    every?: DegreeOnCollegeWhereInput
    some?: DegreeOnCollegeWhereInput
    none?: DegreeOnCollegeWhereInput
  }

  export type DegreeOnCollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CareerOnDegreeListRelationFilter = {
    every?: CareerOnDegreeWhereInput
    some?: CareerOnDegreeWhereInput
    none?: CareerOnDegreeWhereInput
  }

  export type CareerOnDegreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DegreeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    field?: SortOrder
  }

  export type DegreeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DegreeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    field?: SortOrder
  }

  export type DegreeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    field?: SortOrder
  }

  export type DegreeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type DegreeScalarRelationFilter = {
    is?: DegreeWhereInput
    isNot?: DegreeWhereInput
  }

  export type DegreeOnCollegeCollegeIdDegreeIdCompoundUniqueInput = {
    collegeId: number
    degreeId: number
  }

  export type DegreeOnCollegeCountOrderByAggregateInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
  }

  export type DegreeOnCollegeAvgOrderByAggregateInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
  }

  export type DegreeOnCollegeMaxOrderByAggregateInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
  }

  export type DegreeOnCollegeMinOrderByAggregateInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
  }

  export type DegreeOnCollegeSumOrderByAggregateInput = {
    collegeId?: SortOrder
    degreeId?: SortOrder
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salary?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    salary?: SortOrder
  }

  export type CareerScalarRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type InterestOnCareerCareerIdInterestIdCompoundUniqueInput = {
    careerId: number
    interestId: number
  }

  export type InterestOnCareerCountOrderByAggregateInput = {
    careerId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnCareerAvgOrderByAggregateInput = {
    careerId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnCareerMaxOrderByAggregateInput = {
    careerId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnCareerMinOrderByAggregateInput = {
    careerId?: SortOrder
    interestId?: SortOrder
  }

  export type InterestOnCareerSumOrderByAggregateInput = {
    careerId?: SortOrder
    interestId?: SortOrder
  }

  export type SkillOnCareerCareerIdSkillIdCompoundUniqueInput = {
    careerId: number
    skillId: number
  }

  export type SkillOnCareerCountOrderByAggregateInput = {
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnCareerAvgOrderByAggregateInput = {
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnCareerMaxOrderByAggregateInput = {
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnCareerMinOrderByAggregateInput = {
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type SkillOnCareerSumOrderByAggregateInput = {
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CareerOnDegreeCareerIdDegreeIdCompoundUniqueInput = {
    careerId: number
    degreeId: number
  }

  export type CareerOnDegreeCountOrderByAggregateInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
  }

  export type CareerOnDegreeAvgOrderByAggregateInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
  }

  export type CareerOnDegreeMaxOrderByAggregateInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
  }

  export type CareerOnDegreeMinOrderByAggregateInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
  }

  export type CareerOnDegreeSumOrderByAggregateInput = {
    careerId?: SortOrder
    degreeId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AptitudeTestCreateNestedManyWithoutUserInput = {
    create?: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput> | AptitudeTestCreateWithoutUserInput[] | AptitudeTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AptitudeTestCreateOrConnectWithoutUserInput | AptitudeTestCreateOrConnectWithoutUserInput[]
    createMany?: AptitudeTestCreateManyUserInputEnvelope
    connect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
  }

  export type SkillOnProfileCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput> | SkillOnProfileCreateWithoutProfileInput[] | SkillOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutProfileInput | SkillOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: SkillOnProfileCreateManyProfileInputEnvelope
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
  }

  export type InterestOnProfileCreateNestedManyWithoutProfileInput = {
    create?: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput> | InterestOnProfileCreateWithoutProfileInput[] | InterestOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutProfileInput | InterestOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: InterestOnProfileCreateManyProfileInputEnvelope
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
  }

  export type PassionOnProfileCreateNestedManyWithoutProfileInput = {
    create?: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput> | PassionOnProfileCreateWithoutProfileInput[] | PassionOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutProfileInput | PassionOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: PassionOnProfileCreateManyProfileInputEnvelope
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
  }

  export type AptitudeTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput> | AptitudeTestCreateWithoutUserInput[] | AptitudeTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AptitudeTestCreateOrConnectWithoutUserInput | AptitudeTestCreateOrConnectWithoutUserInput[]
    createMany?: AptitudeTestCreateManyUserInputEnvelope
    connect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
  }

  export type SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput> | SkillOnProfileCreateWithoutProfileInput[] | SkillOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutProfileInput | SkillOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: SkillOnProfileCreateManyProfileInputEnvelope
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
  }

  export type InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput> | InterestOnProfileCreateWithoutProfileInput[] | InterestOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutProfileInput | InterestOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: InterestOnProfileCreateManyProfileInputEnvelope
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
  }

  export type PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput> | PassionOnProfileCreateWithoutProfileInput[] | PassionOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutProfileInput | PassionOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: PassionOnProfileCreateManyProfileInputEnvelope
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type AptitudeTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput> | AptitudeTestCreateWithoutUserInput[] | AptitudeTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AptitudeTestCreateOrConnectWithoutUserInput | AptitudeTestCreateOrConnectWithoutUserInput[]
    upsert?: AptitudeTestUpsertWithWhereUniqueWithoutUserInput | AptitudeTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AptitudeTestCreateManyUserInputEnvelope
    set?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    disconnect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    delete?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    connect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    update?: AptitudeTestUpdateWithWhereUniqueWithoutUserInput | AptitudeTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AptitudeTestUpdateManyWithWhereWithoutUserInput | AptitudeTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AptitudeTestScalarWhereInput | AptitudeTestScalarWhereInput[]
  }

  export type SkillOnProfileUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput> | SkillOnProfileCreateWithoutProfileInput[] | SkillOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutProfileInput | SkillOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: SkillOnProfileUpsertWithWhereUniqueWithoutProfileInput | SkillOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillOnProfileCreateManyProfileInputEnvelope
    set?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    disconnect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    delete?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    update?: SkillOnProfileUpdateWithWhereUniqueWithoutProfileInput | SkillOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillOnProfileUpdateManyWithWhereWithoutProfileInput | SkillOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
  }

  export type InterestOnProfileUpdateManyWithoutProfileNestedInput = {
    create?: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput> | InterestOnProfileCreateWithoutProfileInput[] | InterestOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutProfileInput | InterestOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: InterestOnProfileUpsertWithWhereUniqueWithoutProfileInput | InterestOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: InterestOnProfileCreateManyProfileInputEnvelope
    set?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    disconnect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    delete?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    update?: InterestOnProfileUpdateWithWhereUniqueWithoutProfileInput | InterestOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: InterestOnProfileUpdateManyWithWhereWithoutProfileInput | InterestOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
  }

  export type PassionOnProfileUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput> | PassionOnProfileCreateWithoutProfileInput[] | PassionOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutProfileInput | PassionOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: PassionOnProfileUpsertWithWhereUniqueWithoutProfileInput | PassionOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PassionOnProfileCreateManyProfileInputEnvelope
    set?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    disconnect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    delete?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    update?: PassionOnProfileUpdateWithWhereUniqueWithoutProfileInput | PassionOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PassionOnProfileUpdateManyWithWhereWithoutProfileInput | PassionOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
  }

  export type AptitudeTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput> | AptitudeTestCreateWithoutUserInput[] | AptitudeTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AptitudeTestCreateOrConnectWithoutUserInput | AptitudeTestCreateOrConnectWithoutUserInput[]
    upsert?: AptitudeTestUpsertWithWhereUniqueWithoutUserInput | AptitudeTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AptitudeTestCreateManyUserInputEnvelope
    set?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    disconnect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    delete?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    connect?: AptitudeTestWhereUniqueInput | AptitudeTestWhereUniqueInput[]
    update?: AptitudeTestUpdateWithWhereUniqueWithoutUserInput | AptitudeTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AptitudeTestUpdateManyWithWhereWithoutUserInput | AptitudeTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AptitudeTestScalarWhereInput | AptitudeTestScalarWhereInput[]
  }

  export type SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput> | SkillOnProfileCreateWithoutProfileInput[] | SkillOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutProfileInput | SkillOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: SkillOnProfileUpsertWithWhereUniqueWithoutProfileInput | SkillOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillOnProfileCreateManyProfileInputEnvelope
    set?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    disconnect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    delete?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    update?: SkillOnProfileUpdateWithWhereUniqueWithoutProfileInput | SkillOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillOnProfileUpdateManyWithWhereWithoutProfileInput | SkillOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
  }

  export type InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput> | InterestOnProfileCreateWithoutProfileInput[] | InterestOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutProfileInput | InterestOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: InterestOnProfileUpsertWithWhereUniqueWithoutProfileInput | InterestOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: InterestOnProfileCreateManyProfileInputEnvelope
    set?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    disconnect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    delete?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    update?: InterestOnProfileUpdateWithWhereUniqueWithoutProfileInput | InterestOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: InterestOnProfileUpdateManyWithWhereWithoutProfileInput | InterestOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
  }

  export type PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput> | PassionOnProfileCreateWithoutProfileInput[] | PassionOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutProfileInput | PassionOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: PassionOnProfileUpsertWithWhereUniqueWithoutProfileInput | PassionOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PassionOnProfileCreateManyProfileInputEnvelope
    set?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    disconnect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    delete?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    update?: PassionOnProfileUpdateWithWhereUniqueWithoutProfileInput | PassionOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PassionOnProfileUpdateManyWithWhereWithoutProfileInput | PassionOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
  }

  export type SkillOnProfileCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput> | SkillOnProfileCreateWithoutSkillInput[] | SkillOnProfileUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutSkillInput | SkillOnProfileCreateOrConnectWithoutSkillInput[]
    createMany?: SkillOnProfileCreateManySkillInputEnvelope
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
  }

  export type SkillOnCareerCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput> | SkillOnCareerCreateWithoutSkillInput[] | SkillOnCareerUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutSkillInput | SkillOnCareerCreateOrConnectWithoutSkillInput[]
    createMany?: SkillOnCareerCreateManySkillInputEnvelope
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
  }

  export type SkillOnProfileUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput> | SkillOnProfileCreateWithoutSkillInput[] | SkillOnProfileUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutSkillInput | SkillOnProfileCreateOrConnectWithoutSkillInput[]
    createMany?: SkillOnProfileCreateManySkillInputEnvelope
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
  }

  export type SkillOnCareerUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput> | SkillOnCareerCreateWithoutSkillInput[] | SkillOnCareerUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutSkillInput | SkillOnCareerCreateOrConnectWithoutSkillInput[]
    createMany?: SkillOnCareerCreateManySkillInputEnvelope
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
  }

  export type SkillOnProfileUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput> | SkillOnProfileCreateWithoutSkillInput[] | SkillOnProfileUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutSkillInput | SkillOnProfileCreateOrConnectWithoutSkillInput[]
    upsert?: SkillOnProfileUpsertWithWhereUniqueWithoutSkillInput | SkillOnProfileUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillOnProfileCreateManySkillInputEnvelope
    set?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    disconnect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    delete?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    update?: SkillOnProfileUpdateWithWhereUniqueWithoutSkillInput | SkillOnProfileUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillOnProfileUpdateManyWithWhereWithoutSkillInput | SkillOnProfileUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
  }

  export type SkillOnCareerUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput> | SkillOnCareerCreateWithoutSkillInput[] | SkillOnCareerUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutSkillInput | SkillOnCareerCreateOrConnectWithoutSkillInput[]
    upsert?: SkillOnCareerUpsertWithWhereUniqueWithoutSkillInput | SkillOnCareerUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillOnCareerCreateManySkillInputEnvelope
    set?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    disconnect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    delete?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    update?: SkillOnCareerUpdateWithWhereUniqueWithoutSkillInput | SkillOnCareerUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillOnCareerUpdateManyWithWhereWithoutSkillInput | SkillOnCareerUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
  }

  export type SkillOnProfileUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput> | SkillOnProfileCreateWithoutSkillInput[] | SkillOnProfileUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnProfileCreateOrConnectWithoutSkillInput | SkillOnProfileCreateOrConnectWithoutSkillInput[]
    upsert?: SkillOnProfileUpsertWithWhereUniqueWithoutSkillInput | SkillOnProfileUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillOnProfileCreateManySkillInputEnvelope
    set?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    disconnect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    delete?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    connect?: SkillOnProfileWhereUniqueInput | SkillOnProfileWhereUniqueInput[]
    update?: SkillOnProfileUpdateWithWhereUniqueWithoutSkillInput | SkillOnProfileUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillOnProfileUpdateManyWithWhereWithoutSkillInput | SkillOnProfileUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
  }

  export type SkillOnCareerUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput> | SkillOnCareerCreateWithoutSkillInput[] | SkillOnCareerUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutSkillInput | SkillOnCareerCreateOrConnectWithoutSkillInput[]
    upsert?: SkillOnCareerUpsertWithWhereUniqueWithoutSkillInput | SkillOnCareerUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: SkillOnCareerCreateManySkillInputEnvelope
    set?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    disconnect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    delete?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    update?: SkillOnCareerUpdateWithWhereUniqueWithoutSkillInput | SkillOnCareerUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: SkillOnCareerUpdateManyWithWhereWithoutSkillInput | SkillOnCareerUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
  }

  export type InterestOnProfileCreateNestedManyWithoutInterestInput = {
    create?: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput> | InterestOnProfileCreateWithoutInterestInput[] | InterestOnProfileUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutInterestInput | InterestOnProfileCreateOrConnectWithoutInterestInput[]
    createMany?: InterestOnProfileCreateManyInterestInputEnvelope
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
  }

  export type InterestOnCareerCreateNestedManyWithoutInterestInput = {
    create?: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput> | InterestOnCareerCreateWithoutInterestInput[] | InterestOnCareerUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutInterestInput | InterestOnCareerCreateOrConnectWithoutInterestInput[]
    createMany?: InterestOnCareerCreateManyInterestInputEnvelope
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
  }

  export type InterestOnProfileUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput> | InterestOnProfileCreateWithoutInterestInput[] | InterestOnProfileUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutInterestInput | InterestOnProfileCreateOrConnectWithoutInterestInput[]
    createMany?: InterestOnProfileCreateManyInterestInputEnvelope
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
  }

  export type InterestOnCareerUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput> | InterestOnCareerCreateWithoutInterestInput[] | InterestOnCareerUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutInterestInput | InterestOnCareerCreateOrConnectWithoutInterestInput[]
    createMany?: InterestOnCareerCreateManyInterestInputEnvelope
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
  }

  export type InterestOnProfileUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput> | InterestOnProfileCreateWithoutInterestInput[] | InterestOnProfileUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutInterestInput | InterestOnProfileCreateOrConnectWithoutInterestInput[]
    upsert?: InterestOnProfileUpsertWithWhereUniqueWithoutInterestInput | InterestOnProfileUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InterestOnProfileCreateManyInterestInputEnvelope
    set?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    disconnect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    delete?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    update?: InterestOnProfileUpdateWithWhereUniqueWithoutInterestInput | InterestOnProfileUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InterestOnProfileUpdateManyWithWhereWithoutInterestInput | InterestOnProfileUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
  }

  export type InterestOnCareerUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput> | InterestOnCareerCreateWithoutInterestInput[] | InterestOnCareerUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutInterestInput | InterestOnCareerCreateOrConnectWithoutInterestInput[]
    upsert?: InterestOnCareerUpsertWithWhereUniqueWithoutInterestInput | InterestOnCareerUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InterestOnCareerCreateManyInterestInputEnvelope
    set?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    disconnect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    delete?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    update?: InterestOnCareerUpdateWithWhereUniqueWithoutInterestInput | InterestOnCareerUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InterestOnCareerUpdateManyWithWhereWithoutInterestInput | InterestOnCareerUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
  }

  export type InterestOnProfileUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput> | InterestOnProfileCreateWithoutInterestInput[] | InterestOnProfileUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnProfileCreateOrConnectWithoutInterestInput | InterestOnProfileCreateOrConnectWithoutInterestInput[]
    upsert?: InterestOnProfileUpsertWithWhereUniqueWithoutInterestInput | InterestOnProfileUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InterestOnProfileCreateManyInterestInputEnvelope
    set?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    disconnect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    delete?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    connect?: InterestOnProfileWhereUniqueInput | InterestOnProfileWhereUniqueInput[]
    update?: InterestOnProfileUpdateWithWhereUniqueWithoutInterestInput | InterestOnProfileUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InterestOnProfileUpdateManyWithWhereWithoutInterestInput | InterestOnProfileUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
  }

  export type InterestOnCareerUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput> | InterestOnCareerCreateWithoutInterestInput[] | InterestOnCareerUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutInterestInput | InterestOnCareerCreateOrConnectWithoutInterestInput[]
    upsert?: InterestOnCareerUpsertWithWhereUniqueWithoutInterestInput | InterestOnCareerUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InterestOnCareerCreateManyInterestInputEnvelope
    set?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    disconnect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    delete?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    update?: InterestOnCareerUpdateWithWhereUniqueWithoutInterestInput | InterestOnCareerUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InterestOnCareerUpdateManyWithWhereWithoutInterestInput | InterestOnCareerUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
  }

  export type PassionOnProfileCreateNestedManyWithoutPassionInput = {
    create?: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput> | PassionOnProfileCreateWithoutPassionInput[] | PassionOnProfileUncheckedCreateWithoutPassionInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutPassionInput | PassionOnProfileCreateOrConnectWithoutPassionInput[]
    createMany?: PassionOnProfileCreateManyPassionInputEnvelope
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
  }

  export type PassionOnProfileUncheckedCreateNestedManyWithoutPassionInput = {
    create?: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput> | PassionOnProfileCreateWithoutPassionInput[] | PassionOnProfileUncheckedCreateWithoutPassionInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutPassionInput | PassionOnProfileCreateOrConnectWithoutPassionInput[]
    createMany?: PassionOnProfileCreateManyPassionInputEnvelope
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
  }

  export type PassionOnProfileUpdateManyWithoutPassionNestedInput = {
    create?: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput> | PassionOnProfileCreateWithoutPassionInput[] | PassionOnProfileUncheckedCreateWithoutPassionInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutPassionInput | PassionOnProfileCreateOrConnectWithoutPassionInput[]
    upsert?: PassionOnProfileUpsertWithWhereUniqueWithoutPassionInput | PassionOnProfileUpsertWithWhereUniqueWithoutPassionInput[]
    createMany?: PassionOnProfileCreateManyPassionInputEnvelope
    set?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    disconnect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    delete?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    update?: PassionOnProfileUpdateWithWhereUniqueWithoutPassionInput | PassionOnProfileUpdateWithWhereUniqueWithoutPassionInput[]
    updateMany?: PassionOnProfileUpdateManyWithWhereWithoutPassionInput | PassionOnProfileUpdateManyWithWhereWithoutPassionInput[]
    deleteMany?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
  }

  export type PassionOnProfileUncheckedUpdateManyWithoutPassionNestedInput = {
    create?: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput> | PassionOnProfileCreateWithoutPassionInput[] | PassionOnProfileUncheckedCreateWithoutPassionInput[]
    connectOrCreate?: PassionOnProfileCreateOrConnectWithoutPassionInput | PassionOnProfileCreateOrConnectWithoutPassionInput[]
    upsert?: PassionOnProfileUpsertWithWhereUniqueWithoutPassionInput | PassionOnProfileUpsertWithWhereUniqueWithoutPassionInput[]
    createMany?: PassionOnProfileCreateManyPassionInputEnvelope
    set?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    disconnect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    delete?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    connect?: PassionOnProfileWhereUniqueInput | PassionOnProfileWhereUniqueInput[]
    update?: PassionOnProfileUpdateWithWhereUniqueWithoutPassionInput | PassionOnProfileUpdateWithWhereUniqueWithoutPassionInput[]
    updateMany?: PassionOnProfileUpdateManyWithWhereWithoutPassionInput | PassionOnProfileUpdateManyWithWhereWithoutPassionInput[]
    deleteMany?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    upsert?: ProfileUpsertWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSkillsInput, ProfileUpdateWithoutSkillsInput>, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileCreateNestedOneWithoutInterestsInput = {
    create?: XOR<ProfileCreateWithoutInterestsInput, ProfileUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutInterestsInput
    connect?: ProfileWhereUniqueInput
  }

  export type InterestCreateNestedOneWithoutUsersInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    connect?: InterestWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<ProfileCreateWithoutInterestsInput, ProfileUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutInterestsInput
    upsert?: ProfileUpsertWithoutInterestsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutInterestsInput, ProfileUpdateWithoutInterestsInput>, ProfileUncheckedUpdateWithoutInterestsInput>
  }

  export type InterestUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    upsert?: InterestUpsertWithoutUsersInput
    connect?: InterestWhereUniqueInput
    update?: XOR<XOR<InterestUpdateToOneWithWhereWithoutUsersInput, InterestUpdateWithoutUsersInput>, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileCreateNestedOneWithoutPassionsInput = {
    create?: XOR<ProfileCreateWithoutPassionsInput, ProfileUncheckedCreateWithoutPassionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPassionsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PassionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PassionCreateWithoutUsersInput, PassionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PassionCreateOrConnectWithoutUsersInput
    connect?: PassionWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutPassionsNestedInput = {
    create?: XOR<ProfileCreateWithoutPassionsInput, ProfileUncheckedCreateWithoutPassionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPassionsInput
    upsert?: ProfileUpsertWithoutPassionsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPassionsInput, ProfileUpdateWithoutPassionsInput>, ProfileUncheckedUpdateWithoutPassionsInput>
  }

  export type PassionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PassionCreateWithoutUsersInput, PassionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PassionCreateOrConnectWithoutUsersInput
    upsert?: PassionUpsertWithoutUsersInput
    connect?: PassionWhereUniqueInput
    update?: XOR<XOR<PassionUpdateToOneWithWhereWithoutUsersInput, PassionUpdateWithoutUsersInput>, PassionUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileCreateNestedOneWithoutAptitudeTestsInput = {
    create?: XOR<ProfileCreateWithoutAptitudeTestsInput, ProfileUncheckedCreateWithoutAptitudeTestsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAptitudeTestsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAptitudeTestsNestedInput = {
    create?: XOR<ProfileCreateWithoutAptitudeTestsInput, ProfileUncheckedCreateWithoutAptitudeTestsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAptitudeTestsInput
    upsert?: ProfileUpsertWithoutAptitudeTestsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAptitudeTestsInput, ProfileUpdateWithoutAptitudeTestsInput>, ProfileUncheckedUpdateWithoutAptitudeTestsInput>
  }

  export type DegreeOnCollegeCreateNestedManyWithoutCollegeInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput> | DegreeOnCollegeCreateWithoutCollegeInput[] | DegreeOnCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutCollegeInput | DegreeOnCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: DegreeOnCollegeCreateManyCollegeInputEnvelope
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
  }

  export type DegreeOnCollegeUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput> | DegreeOnCollegeCreateWithoutCollegeInput[] | DegreeOnCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutCollegeInput | DegreeOnCollegeCreateOrConnectWithoutCollegeInput[]
    createMany?: DegreeOnCollegeCreateManyCollegeInputEnvelope
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
  }

  export type DegreeOnCollegeUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput> | DegreeOnCollegeCreateWithoutCollegeInput[] | DegreeOnCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutCollegeInput | DegreeOnCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: DegreeOnCollegeUpsertWithWhereUniqueWithoutCollegeInput | DegreeOnCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: DegreeOnCollegeCreateManyCollegeInputEnvelope
    set?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    disconnect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    delete?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    update?: DegreeOnCollegeUpdateWithWhereUniqueWithoutCollegeInput | DegreeOnCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: DegreeOnCollegeUpdateManyWithWhereWithoutCollegeInput | DegreeOnCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
  }

  export type DegreeOnCollegeUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput> | DegreeOnCollegeCreateWithoutCollegeInput[] | DegreeOnCollegeUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutCollegeInput | DegreeOnCollegeCreateOrConnectWithoutCollegeInput[]
    upsert?: DegreeOnCollegeUpsertWithWhereUniqueWithoutCollegeInput | DegreeOnCollegeUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: DegreeOnCollegeCreateManyCollegeInputEnvelope
    set?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    disconnect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    delete?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    update?: DegreeOnCollegeUpdateWithWhereUniqueWithoutCollegeInput | DegreeOnCollegeUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: DegreeOnCollegeUpdateManyWithWhereWithoutCollegeInput | DegreeOnCollegeUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
  }

  export type CareerOnDegreeCreateNestedManyWithoutDegreeInput = {
    create?: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput> | CareerOnDegreeCreateWithoutDegreeInput[] | CareerOnDegreeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutDegreeInput | CareerOnDegreeCreateOrConnectWithoutDegreeInput[]
    createMany?: CareerOnDegreeCreateManyDegreeInputEnvelope
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
  }

  export type DegreeOnCollegeCreateNestedManyWithoutDegreeInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput> | DegreeOnCollegeCreateWithoutDegreeInput[] | DegreeOnCollegeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutDegreeInput | DegreeOnCollegeCreateOrConnectWithoutDegreeInput[]
    createMany?: DegreeOnCollegeCreateManyDegreeInputEnvelope
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
  }

  export type CareerOnDegreeUncheckedCreateNestedManyWithoutDegreeInput = {
    create?: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput> | CareerOnDegreeCreateWithoutDegreeInput[] | CareerOnDegreeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutDegreeInput | CareerOnDegreeCreateOrConnectWithoutDegreeInput[]
    createMany?: CareerOnDegreeCreateManyDegreeInputEnvelope
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
  }

  export type DegreeOnCollegeUncheckedCreateNestedManyWithoutDegreeInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput> | DegreeOnCollegeCreateWithoutDegreeInput[] | DegreeOnCollegeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutDegreeInput | DegreeOnCollegeCreateOrConnectWithoutDegreeInput[]
    createMany?: DegreeOnCollegeCreateManyDegreeInputEnvelope
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
  }

  export type CareerOnDegreeUpdateManyWithoutDegreeNestedInput = {
    create?: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput> | CareerOnDegreeCreateWithoutDegreeInput[] | CareerOnDegreeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutDegreeInput | CareerOnDegreeCreateOrConnectWithoutDegreeInput[]
    upsert?: CareerOnDegreeUpsertWithWhereUniqueWithoutDegreeInput | CareerOnDegreeUpsertWithWhereUniqueWithoutDegreeInput[]
    createMany?: CareerOnDegreeCreateManyDegreeInputEnvelope
    set?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    disconnect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    delete?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    update?: CareerOnDegreeUpdateWithWhereUniqueWithoutDegreeInput | CareerOnDegreeUpdateWithWhereUniqueWithoutDegreeInput[]
    updateMany?: CareerOnDegreeUpdateManyWithWhereWithoutDegreeInput | CareerOnDegreeUpdateManyWithWhereWithoutDegreeInput[]
    deleteMany?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
  }

  export type DegreeOnCollegeUpdateManyWithoutDegreeNestedInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput> | DegreeOnCollegeCreateWithoutDegreeInput[] | DegreeOnCollegeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutDegreeInput | DegreeOnCollegeCreateOrConnectWithoutDegreeInput[]
    upsert?: DegreeOnCollegeUpsertWithWhereUniqueWithoutDegreeInput | DegreeOnCollegeUpsertWithWhereUniqueWithoutDegreeInput[]
    createMany?: DegreeOnCollegeCreateManyDegreeInputEnvelope
    set?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    disconnect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    delete?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    update?: DegreeOnCollegeUpdateWithWhereUniqueWithoutDegreeInput | DegreeOnCollegeUpdateWithWhereUniqueWithoutDegreeInput[]
    updateMany?: DegreeOnCollegeUpdateManyWithWhereWithoutDegreeInput | DegreeOnCollegeUpdateManyWithWhereWithoutDegreeInput[]
    deleteMany?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
  }

  export type CareerOnDegreeUncheckedUpdateManyWithoutDegreeNestedInput = {
    create?: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput> | CareerOnDegreeCreateWithoutDegreeInput[] | CareerOnDegreeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutDegreeInput | CareerOnDegreeCreateOrConnectWithoutDegreeInput[]
    upsert?: CareerOnDegreeUpsertWithWhereUniqueWithoutDegreeInput | CareerOnDegreeUpsertWithWhereUniqueWithoutDegreeInput[]
    createMany?: CareerOnDegreeCreateManyDegreeInputEnvelope
    set?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    disconnect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    delete?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    update?: CareerOnDegreeUpdateWithWhereUniqueWithoutDegreeInput | CareerOnDegreeUpdateWithWhereUniqueWithoutDegreeInput[]
    updateMany?: CareerOnDegreeUpdateManyWithWhereWithoutDegreeInput | CareerOnDegreeUpdateManyWithWhereWithoutDegreeInput[]
    deleteMany?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
  }

  export type DegreeOnCollegeUncheckedUpdateManyWithoutDegreeNestedInput = {
    create?: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput> | DegreeOnCollegeCreateWithoutDegreeInput[] | DegreeOnCollegeUncheckedCreateWithoutDegreeInput[]
    connectOrCreate?: DegreeOnCollegeCreateOrConnectWithoutDegreeInput | DegreeOnCollegeCreateOrConnectWithoutDegreeInput[]
    upsert?: DegreeOnCollegeUpsertWithWhereUniqueWithoutDegreeInput | DegreeOnCollegeUpsertWithWhereUniqueWithoutDegreeInput[]
    createMany?: DegreeOnCollegeCreateManyDegreeInputEnvelope
    set?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    disconnect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    delete?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    connect?: DegreeOnCollegeWhereUniqueInput | DegreeOnCollegeWhereUniqueInput[]
    update?: DegreeOnCollegeUpdateWithWhereUniqueWithoutDegreeInput | DegreeOnCollegeUpdateWithWhereUniqueWithoutDegreeInput[]
    updateMany?: DegreeOnCollegeUpdateManyWithWhereWithoutDegreeInput | DegreeOnCollegeUpdateManyWithWhereWithoutDegreeInput[]
    deleteMany?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
  }

  export type CollegeCreateNestedOneWithoutDegreesInput = {
    create?: XOR<CollegeCreateWithoutDegreesInput, CollegeUncheckedCreateWithoutDegreesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutDegreesInput
    connect?: CollegeWhereUniqueInput
  }

  export type DegreeCreateNestedOneWithoutCollegesInput = {
    create?: XOR<DegreeCreateWithoutCollegesInput, DegreeUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: DegreeCreateOrConnectWithoutCollegesInput
    connect?: DegreeWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutDegreesNestedInput = {
    create?: XOR<CollegeCreateWithoutDegreesInput, CollegeUncheckedCreateWithoutDegreesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutDegreesInput
    upsert?: CollegeUpsertWithoutDegreesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutDegreesInput, CollegeUpdateWithoutDegreesInput>, CollegeUncheckedUpdateWithoutDegreesInput>
  }

  export type DegreeUpdateOneRequiredWithoutCollegesNestedInput = {
    create?: XOR<DegreeCreateWithoutCollegesInput, DegreeUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: DegreeCreateOrConnectWithoutCollegesInput
    upsert?: DegreeUpsertWithoutCollegesInput
    connect?: DegreeWhereUniqueInput
    update?: XOR<XOR<DegreeUpdateToOneWithWhereWithoutCollegesInput, DegreeUpdateWithoutCollegesInput>, DegreeUncheckedUpdateWithoutCollegesInput>
  }

  export type SkillOnCareerCreateNestedManyWithoutCareerInput = {
    create?: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput> | SkillOnCareerCreateWithoutCareerInput[] | SkillOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutCareerInput | SkillOnCareerCreateOrConnectWithoutCareerInput[]
    createMany?: SkillOnCareerCreateManyCareerInputEnvelope
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
  }

  export type InterestOnCareerCreateNestedManyWithoutCareerInput = {
    create?: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput> | InterestOnCareerCreateWithoutCareerInput[] | InterestOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutCareerInput | InterestOnCareerCreateOrConnectWithoutCareerInput[]
    createMany?: InterestOnCareerCreateManyCareerInputEnvelope
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
  }

  export type CareerOnDegreeCreateNestedManyWithoutCareerInput = {
    create?: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput> | CareerOnDegreeCreateWithoutCareerInput[] | CareerOnDegreeUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutCareerInput | CareerOnDegreeCreateOrConnectWithoutCareerInput[]
    createMany?: CareerOnDegreeCreateManyCareerInputEnvelope
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
  }

  export type SkillOnCareerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput> | SkillOnCareerCreateWithoutCareerInput[] | SkillOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutCareerInput | SkillOnCareerCreateOrConnectWithoutCareerInput[]
    createMany?: SkillOnCareerCreateManyCareerInputEnvelope
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
  }

  export type InterestOnCareerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput> | InterestOnCareerCreateWithoutCareerInput[] | InterestOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutCareerInput | InterestOnCareerCreateOrConnectWithoutCareerInput[]
    createMany?: InterestOnCareerCreateManyCareerInputEnvelope
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
  }

  export type CareerOnDegreeUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput> | CareerOnDegreeCreateWithoutCareerInput[] | CareerOnDegreeUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutCareerInput | CareerOnDegreeCreateOrConnectWithoutCareerInput[]
    createMany?: CareerOnDegreeCreateManyCareerInputEnvelope
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
  }

  export type SkillOnCareerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput> | SkillOnCareerCreateWithoutCareerInput[] | SkillOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutCareerInput | SkillOnCareerCreateOrConnectWithoutCareerInput[]
    upsert?: SkillOnCareerUpsertWithWhereUniqueWithoutCareerInput | SkillOnCareerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: SkillOnCareerCreateManyCareerInputEnvelope
    set?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    disconnect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    delete?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    update?: SkillOnCareerUpdateWithWhereUniqueWithoutCareerInput | SkillOnCareerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: SkillOnCareerUpdateManyWithWhereWithoutCareerInput | SkillOnCareerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
  }

  export type InterestOnCareerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput> | InterestOnCareerCreateWithoutCareerInput[] | InterestOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutCareerInput | InterestOnCareerCreateOrConnectWithoutCareerInput[]
    upsert?: InterestOnCareerUpsertWithWhereUniqueWithoutCareerInput | InterestOnCareerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: InterestOnCareerCreateManyCareerInputEnvelope
    set?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    disconnect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    delete?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    update?: InterestOnCareerUpdateWithWhereUniqueWithoutCareerInput | InterestOnCareerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: InterestOnCareerUpdateManyWithWhereWithoutCareerInput | InterestOnCareerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
  }

  export type CareerOnDegreeUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput> | CareerOnDegreeCreateWithoutCareerInput[] | CareerOnDegreeUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutCareerInput | CareerOnDegreeCreateOrConnectWithoutCareerInput[]
    upsert?: CareerOnDegreeUpsertWithWhereUniqueWithoutCareerInput | CareerOnDegreeUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CareerOnDegreeCreateManyCareerInputEnvelope
    set?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    disconnect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    delete?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    update?: CareerOnDegreeUpdateWithWhereUniqueWithoutCareerInput | CareerOnDegreeUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CareerOnDegreeUpdateManyWithWhereWithoutCareerInput | CareerOnDegreeUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
  }

  export type SkillOnCareerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput> | SkillOnCareerCreateWithoutCareerInput[] | SkillOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SkillOnCareerCreateOrConnectWithoutCareerInput | SkillOnCareerCreateOrConnectWithoutCareerInput[]
    upsert?: SkillOnCareerUpsertWithWhereUniqueWithoutCareerInput | SkillOnCareerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: SkillOnCareerCreateManyCareerInputEnvelope
    set?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    disconnect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    delete?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    connect?: SkillOnCareerWhereUniqueInput | SkillOnCareerWhereUniqueInput[]
    update?: SkillOnCareerUpdateWithWhereUniqueWithoutCareerInput | SkillOnCareerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: SkillOnCareerUpdateManyWithWhereWithoutCareerInput | SkillOnCareerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
  }

  export type InterestOnCareerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput> | InterestOnCareerCreateWithoutCareerInput[] | InterestOnCareerUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: InterestOnCareerCreateOrConnectWithoutCareerInput | InterestOnCareerCreateOrConnectWithoutCareerInput[]
    upsert?: InterestOnCareerUpsertWithWhereUniqueWithoutCareerInput | InterestOnCareerUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: InterestOnCareerCreateManyCareerInputEnvelope
    set?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    disconnect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    delete?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    connect?: InterestOnCareerWhereUniqueInput | InterestOnCareerWhereUniqueInput[]
    update?: InterestOnCareerUpdateWithWhereUniqueWithoutCareerInput | InterestOnCareerUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: InterestOnCareerUpdateManyWithWhereWithoutCareerInput | InterestOnCareerUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
  }

  export type CareerOnDegreeUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput> | CareerOnDegreeCreateWithoutCareerInput[] | CareerOnDegreeUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerOnDegreeCreateOrConnectWithoutCareerInput | CareerOnDegreeCreateOrConnectWithoutCareerInput[]
    upsert?: CareerOnDegreeUpsertWithWhereUniqueWithoutCareerInput | CareerOnDegreeUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CareerOnDegreeCreateManyCareerInputEnvelope
    set?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    disconnect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    delete?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    connect?: CareerOnDegreeWhereUniqueInput | CareerOnDegreeWhereUniqueInput[]
    update?: CareerOnDegreeUpdateWithWhereUniqueWithoutCareerInput | CareerOnDegreeUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CareerOnDegreeUpdateManyWithWhereWithoutCareerInput | CareerOnDegreeUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
  }

  export type CareerCreateNestedOneWithoutInterestRequiredInput = {
    create?: XOR<CareerCreateWithoutInterestRequiredInput, CareerUncheckedCreateWithoutInterestRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutInterestRequiredInput
    connect?: CareerWhereUniqueInput
  }

  export type InterestCreateNestedOneWithoutCareersInput = {
    create?: XOR<InterestCreateWithoutCareersInput, InterestUncheckedCreateWithoutCareersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutCareersInput
    connect?: InterestWhereUniqueInput
  }

  export type CareerUpdateOneRequiredWithoutInterestRequiredNestedInput = {
    create?: XOR<CareerCreateWithoutInterestRequiredInput, CareerUncheckedCreateWithoutInterestRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutInterestRequiredInput
    upsert?: CareerUpsertWithoutInterestRequiredInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutInterestRequiredInput, CareerUpdateWithoutInterestRequiredInput>, CareerUncheckedUpdateWithoutInterestRequiredInput>
  }

  export type InterestUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<InterestCreateWithoutCareersInput, InterestUncheckedCreateWithoutCareersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutCareersInput
    upsert?: InterestUpsertWithoutCareersInput
    connect?: InterestWhereUniqueInput
    update?: XOR<XOR<InterestUpdateToOneWithWhereWithoutCareersInput, InterestUpdateWithoutCareersInput>, InterestUncheckedUpdateWithoutCareersInput>
  }

  export type CareerCreateNestedOneWithoutSkillsRequiredInput = {
    create?: XOR<CareerCreateWithoutSkillsRequiredInput, CareerUncheckedCreateWithoutSkillsRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutSkillsRequiredInput
    connect?: CareerWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutCareersInput = {
    create?: XOR<SkillCreateWithoutCareersInput, SkillUncheckedCreateWithoutCareersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCareersInput
    connect?: SkillWhereUniqueInput
  }

  export type CareerUpdateOneRequiredWithoutSkillsRequiredNestedInput = {
    create?: XOR<CareerCreateWithoutSkillsRequiredInput, CareerUncheckedCreateWithoutSkillsRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutSkillsRequiredInput
    upsert?: CareerUpsertWithoutSkillsRequiredInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutSkillsRequiredInput, CareerUpdateWithoutSkillsRequiredInput>, CareerUncheckedUpdateWithoutSkillsRequiredInput>
  }

  export type SkillUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<SkillCreateWithoutCareersInput, SkillUncheckedCreateWithoutCareersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCareersInput
    upsert?: SkillUpsertWithoutCareersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutCareersInput, SkillUpdateWithoutCareersInput>, SkillUncheckedUpdateWithoutCareersInput>
  }

  export type CareerCreateNestedOneWithoutDegreesRequiredInput = {
    create?: XOR<CareerCreateWithoutDegreesRequiredInput, CareerUncheckedCreateWithoutDegreesRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutDegreesRequiredInput
    connect?: CareerWhereUniqueInput
  }

  export type DegreeCreateNestedOneWithoutCareersInput = {
    create?: XOR<DegreeCreateWithoutCareersInput, DegreeUncheckedCreateWithoutCareersInput>
    connectOrCreate?: DegreeCreateOrConnectWithoutCareersInput
    connect?: DegreeWhereUniqueInput
  }

  export type CareerUpdateOneRequiredWithoutDegreesRequiredNestedInput = {
    create?: XOR<CareerCreateWithoutDegreesRequiredInput, CareerUncheckedCreateWithoutDegreesRequiredInput>
    connectOrCreate?: CareerCreateOrConnectWithoutDegreesRequiredInput
    upsert?: CareerUpsertWithoutDegreesRequiredInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutDegreesRequiredInput, CareerUpdateWithoutDegreesRequiredInput>, CareerUncheckedUpdateWithoutDegreesRequiredInput>
  }

  export type DegreeUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<DegreeCreateWithoutCareersInput, DegreeUncheckedCreateWithoutCareersInput>
    connectOrCreate?: DegreeCreateOrConnectWithoutCareersInput
    upsert?: DegreeUpsertWithoutCareersInput
    connect?: DegreeWhereUniqueInput
    update?: XOR<XOR<DegreeUpdateToOneWithWhereWithoutCareersInput, DegreeUpdateWithoutCareersInput>, DegreeUncheckedUpdateWithoutCareersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProfileCreateWithoutUserInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    otp?: string | null
    createdAt?: Date | string
    hasProfile?: boolean
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    otp?: string | null
    createdAt?: Date | string
    hasProfile?: boolean
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type AptitudeTestCreateWithoutUserInput = {
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
  }

  export type AptitudeTestUncheckedCreateWithoutUserInput = {
    id?: number
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
  }

  export type AptitudeTestCreateOrConnectWithoutUserInput = {
    where: AptitudeTestWhereUniqueInput
    create: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput>
  }

  export type AptitudeTestCreateManyUserInputEnvelope = {
    data: AptitudeTestCreateManyUserInput | AptitudeTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillOnProfileCreateWithoutProfileInput = {
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type SkillOnProfileUncheckedCreateWithoutProfileInput = {
    skillId: number
  }

  export type SkillOnProfileCreateOrConnectWithoutProfileInput = {
    where: SkillOnProfileWhereUniqueInput
    create: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type SkillOnProfileCreateManyProfileInputEnvelope = {
    data: SkillOnProfileCreateManyProfileInput | SkillOnProfileCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type InterestOnProfileCreateWithoutProfileInput = {
    interest: InterestCreateNestedOneWithoutUsersInput
  }

  export type InterestOnProfileUncheckedCreateWithoutProfileInput = {
    interestId: number
  }

  export type InterestOnProfileCreateOrConnectWithoutProfileInput = {
    where: InterestOnProfileWhereUniqueInput
    create: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type InterestOnProfileCreateManyProfileInputEnvelope = {
    data: InterestOnProfileCreateManyProfileInput | InterestOnProfileCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type PassionOnProfileCreateWithoutProfileInput = {
    passion: PassionCreateNestedOneWithoutUsersInput
  }

  export type PassionOnProfileUncheckedCreateWithoutProfileInput = {
    passionId: number
  }

  export type PassionOnProfileCreateOrConnectWithoutProfileInput = {
    where: PassionOnProfileWhereUniqueInput
    create: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type PassionOnProfileCreateManyProfileInputEnvelope = {
    data: PassionOnProfileCreateManyProfileInput | PassionOnProfileCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasProfile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AptitudeTestUpsertWithWhereUniqueWithoutUserInput = {
    where: AptitudeTestWhereUniqueInput
    update: XOR<AptitudeTestUpdateWithoutUserInput, AptitudeTestUncheckedUpdateWithoutUserInput>
    create: XOR<AptitudeTestCreateWithoutUserInput, AptitudeTestUncheckedCreateWithoutUserInput>
  }

  export type AptitudeTestUpdateWithWhereUniqueWithoutUserInput = {
    where: AptitudeTestWhereUniqueInput
    data: XOR<AptitudeTestUpdateWithoutUserInput, AptitudeTestUncheckedUpdateWithoutUserInput>
  }

  export type AptitudeTestUpdateManyWithWhereWithoutUserInput = {
    where: AptitudeTestScalarWhereInput
    data: XOR<AptitudeTestUpdateManyMutationInput, AptitudeTestUncheckedUpdateManyWithoutUserInput>
  }

  export type AptitudeTestScalarWhereInput = {
    AND?: AptitudeTestScalarWhereInput | AptitudeTestScalarWhereInput[]
    OR?: AptitudeTestScalarWhereInput[]
    NOT?: AptitudeTestScalarWhereInput | AptitudeTestScalarWhereInput[]
    id?: IntFilter<"AptitudeTest"> | number
    userId?: IntFilter<"AptitudeTest"> | number
    dateTaken?: DateTimeFilter<"AptitudeTest"> | Date | string
    scores?: JsonFilter<"AptitudeTest">
    total?: IntFilter<"AptitudeTest"> | number
  }

  export type SkillOnProfileUpsertWithWhereUniqueWithoutProfileInput = {
    where: SkillOnProfileWhereUniqueInput
    update: XOR<SkillOnProfileUpdateWithoutProfileInput, SkillOnProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<SkillOnProfileCreateWithoutProfileInput, SkillOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type SkillOnProfileUpdateWithWhereUniqueWithoutProfileInput = {
    where: SkillOnProfileWhereUniqueInput
    data: XOR<SkillOnProfileUpdateWithoutProfileInput, SkillOnProfileUncheckedUpdateWithoutProfileInput>
  }

  export type SkillOnProfileUpdateManyWithWhereWithoutProfileInput = {
    where: SkillOnProfileScalarWhereInput
    data: XOR<SkillOnProfileUpdateManyMutationInput, SkillOnProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type SkillOnProfileScalarWhereInput = {
    AND?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
    OR?: SkillOnProfileScalarWhereInput[]
    NOT?: SkillOnProfileScalarWhereInput | SkillOnProfileScalarWhereInput[]
    profileId?: IntFilter<"SkillOnProfile"> | number
    skillId?: IntFilter<"SkillOnProfile"> | number
  }

  export type InterestOnProfileUpsertWithWhereUniqueWithoutProfileInput = {
    where: InterestOnProfileWhereUniqueInput
    update: XOR<InterestOnProfileUpdateWithoutProfileInput, InterestOnProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<InterestOnProfileCreateWithoutProfileInput, InterestOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type InterestOnProfileUpdateWithWhereUniqueWithoutProfileInput = {
    where: InterestOnProfileWhereUniqueInput
    data: XOR<InterestOnProfileUpdateWithoutProfileInput, InterestOnProfileUncheckedUpdateWithoutProfileInput>
  }

  export type InterestOnProfileUpdateManyWithWhereWithoutProfileInput = {
    where: InterestOnProfileScalarWhereInput
    data: XOR<InterestOnProfileUpdateManyMutationInput, InterestOnProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type InterestOnProfileScalarWhereInput = {
    AND?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
    OR?: InterestOnProfileScalarWhereInput[]
    NOT?: InterestOnProfileScalarWhereInput | InterestOnProfileScalarWhereInput[]
    profileId?: IntFilter<"InterestOnProfile"> | number
    interestId?: IntFilter<"InterestOnProfile"> | number
  }

  export type PassionOnProfileUpsertWithWhereUniqueWithoutProfileInput = {
    where: PassionOnProfileWhereUniqueInput
    update: XOR<PassionOnProfileUpdateWithoutProfileInput, PassionOnProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<PassionOnProfileCreateWithoutProfileInput, PassionOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type PassionOnProfileUpdateWithWhereUniqueWithoutProfileInput = {
    where: PassionOnProfileWhereUniqueInput
    data: XOR<PassionOnProfileUpdateWithoutProfileInput, PassionOnProfileUncheckedUpdateWithoutProfileInput>
  }

  export type PassionOnProfileUpdateManyWithWhereWithoutProfileInput = {
    where: PassionOnProfileScalarWhereInput
    data: XOR<PassionOnProfileUpdateManyMutationInput, PassionOnProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type PassionOnProfileScalarWhereInput = {
    AND?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
    OR?: PassionOnProfileScalarWhereInput[]
    NOT?: PassionOnProfileScalarWhereInput | PassionOnProfileScalarWhereInput[]
    profileId?: IntFilter<"PassionOnProfile"> | number
    passionId?: IntFilter<"PassionOnProfile"> | number
  }

  export type SkillOnProfileCreateWithoutSkillInput = {
    profile: ProfileCreateNestedOneWithoutSkillsInput
  }

  export type SkillOnProfileUncheckedCreateWithoutSkillInput = {
    profileId: number
  }

  export type SkillOnProfileCreateOrConnectWithoutSkillInput = {
    where: SkillOnProfileWhereUniqueInput
    create: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput>
  }

  export type SkillOnProfileCreateManySkillInputEnvelope = {
    data: SkillOnProfileCreateManySkillInput | SkillOnProfileCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type SkillOnCareerCreateWithoutSkillInput = {
    career: CareerCreateNestedOneWithoutSkillsRequiredInput
  }

  export type SkillOnCareerUncheckedCreateWithoutSkillInput = {
    careerId: number
  }

  export type SkillOnCareerCreateOrConnectWithoutSkillInput = {
    where: SkillOnCareerWhereUniqueInput
    create: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput>
  }

  export type SkillOnCareerCreateManySkillInputEnvelope = {
    data: SkillOnCareerCreateManySkillInput | SkillOnCareerCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type SkillOnProfileUpsertWithWhereUniqueWithoutSkillInput = {
    where: SkillOnProfileWhereUniqueInput
    update: XOR<SkillOnProfileUpdateWithoutSkillInput, SkillOnProfileUncheckedUpdateWithoutSkillInput>
    create: XOR<SkillOnProfileCreateWithoutSkillInput, SkillOnProfileUncheckedCreateWithoutSkillInput>
  }

  export type SkillOnProfileUpdateWithWhereUniqueWithoutSkillInput = {
    where: SkillOnProfileWhereUniqueInput
    data: XOR<SkillOnProfileUpdateWithoutSkillInput, SkillOnProfileUncheckedUpdateWithoutSkillInput>
  }

  export type SkillOnProfileUpdateManyWithWhereWithoutSkillInput = {
    where: SkillOnProfileScalarWhereInput
    data: XOR<SkillOnProfileUpdateManyMutationInput, SkillOnProfileUncheckedUpdateManyWithoutSkillInput>
  }

  export type SkillOnCareerUpsertWithWhereUniqueWithoutSkillInput = {
    where: SkillOnCareerWhereUniqueInput
    update: XOR<SkillOnCareerUpdateWithoutSkillInput, SkillOnCareerUncheckedUpdateWithoutSkillInput>
    create: XOR<SkillOnCareerCreateWithoutSkillInput, SkillOnCareerUncheckedCreateWithoutSkillInput>
  }

  export type SkillOnCareerUpdateWithWhereUniqueWithoutSkillInput = {
    where: SkillOnCareerWhereUniqueInput
    data: XOR<SkillOnCareerUpdateWithoutSkillInput, SkillOnCareerUncheckedUpdateWithoutSkillInput>
  }

  export type SkillOnCareerUpdateManyWithWhereWithoutSkillInput = {
    where: SkillOnCareerScalarWhereInput
    data: XOR<SkillOnCareerUpdateManyMutationInput, SkillOnCareerUncheckedUpdateManyWithoutSkillInput>
  }

  export type SkillOnCareerScalarWhereInput = {
    AND?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
    OR?: SkillOnCareerScalarWhereInput[]
    NOT?: SkillOnCareerScalarWhereInput | SkillOnCareerScalarWhereInput[]
    careerId?: IntFilter<"SkillOnCareer"> | number
    skillId?: IntFilter<"SkillOnCareer"> | number
  }

  export type InterestOnProfileCreateWithoutInterestInput = {
    profile: ProfileCreateNestedOneWithoutInterestsInput
  }

  export type InterestOnProfileUncheckedCreateWithoutInterestInput = {
    profileId: number
  }

  export type InterestOnProfileCreateOrConnectWithoutInterestInput = {
    where: InterestOnProfileWhereUniqueInput
    create: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput>
  }

  export type InterestOnProfileCreateManyInterestInputEnvelope = {
    data: InterestOnProfileCreateManyInterestInput | InterestOnProfileCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type InterestOnCareerCreateWithoutInterestInput = {
    career: CareerCreateNestedOneWithoutInterestRequiredInput
  }

  export type InterestOnCareerUncheckedCreateWithoutInterestInput = {
    careerId: number
  }

  export type InterestOnCareerCreateOrConnectWithoutInterestInput = {
    where: InterestOnCareerWhereUniqueInput
    create: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput>
  }

  export type InterestOnCareerCreateManyInterestInputEnvelope = {
    data: InterestOnCareerCreateManyInterestInput | InterestOnCareerCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type InterestOnProfileUpsertWithWhereUniqueWithoutInterestInput = {
    where: InterestOnProfileWhereUniqueInput
    update: XOR<InterestOnProfileUpdateWithoutInterestInput, InterestOnProfileUncheckedUpdateWithoutInterestInput>
    create: XOR<InterestOnProfileCreateWithoutInterestInput, InterestOnProfileUncheckedCreateWithoutInterestInput>
  }

  export type InterestOnProfileUpdateWithWhereUniqueWithoutInterestInput = {
    where: InterestOnProfileWhereUniqueInput
    data: XOR<InterestOnProfileUpdateWithoutInterestInput, InterestOnProfileUncheckedUpdateWithoutInterestInput>
  }

  export type InterestOnProfileUpdateManyWithWhereWithoutInterestInput = {
    where: InterestOnProfileScalarWhereInput
    data: XOR<InterestOnProfileUpdateManyMutationInput, InterestOnProfileUncheckedUpdateManyWithoutInterestInput>
  }

  export type InterestOnCareerUpsertWithWhereUniqueWithoutInterestInput = {
    where: InterestOnCareerWhereUniqueInput
    update: XOR<InterestOnCareerUpdateWithoutInterestInput, InterestOnCareerUncheckedUpdateWithoutInterestInput>
    create: XOR<InterestOnCareerCreateWithoutInterestInput, InterestOnCareerUncheckedCreateWithoutInterestInput>
  }

  export type InterestOnCareerUpdateWithWhereUniqueWithoutInterestInput = {
    where: InterestOnCareerWhereUniqueInput
    data: XOR<InterestOnCareerUpdateWithoutInterestInput, InterestOnCareerUncheckedUpdateWithoutInterestInput>
  }

  export type InterestOnCareerUpdateManyWithWhereWithoutInterestInput = {
    where: InterestOnCareerScalarWhereInput
    data: XOR<InterestOnCareerUpdateManyMutationInput, InterestOnCareerUncheckedUpdateManyWithoutInterestInput>
  }

  export type InterestOnCareerScalarWhereInput = {
    AND?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
    OR?: InterestOnCareerScalarWhereInput[]
    NOT?: InterestOnCareerScalarWhereInput | InterestOnCareerScalarWhereInput[]
    careerId?: IntFilter<"InterestOnCareer"> | number
    interestId?: IntFilter<"InterestOnCareer"> | number
  }

  export type PassionOnProfileCreateWithoutPassionInput = {
    profile: ProfileCreateNestedOneWithoutPassionsInput
  }

  export type PassionOnProfileUncheckedCreateWithoutPassionInput = {
    profileId: number
  }

  export type PassionOnProfileCreateOrConnectWithoutPassionInput = {
    where: PassionOnProfileWhereUniqueInput
    create: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput>
  }

  export type PassionOnProfileCreateManyPassionInputEnvelope = {
    data: PassionOnProfileCreateManyPassionInput | PassionOnProfileCreateManyPassionInput[]
    skipDuplicates?: boolean
  }

  export type PassionOnProfileUpsertWithWhereUniqueWithoutPassionInput = {
    where: PassionOnProfileWhereUniqueInput
    update: XOR<PassionOnProfileUpdateWithoutPassionInput, PassionOnProfileUncheckedUpdateWithoutPassionInput>
    create: XOR<PassionOnProfileCreateWithoutPassionInput, PassionOnProfileUncheckedCreateWithoutPassionInput>
  }

  export type PassionOnProfileUpdateWithWhereUniqueWithoutPassionInput = {
    where: PassionOnProfileWhereUniqueInput
    data: XOR<PassionOnProfileUpdateWithoutPassionInput, PassionOnProfileUncheckedUpdateWithoutPassionInput>
  }

  export type PassionOnProfileUpdateManyWithWhereWithoutPassionInput = {
    where: PassionOnProfileScalarWhereInput
    data: XOR<PassionOnProfileUpdateManyMutationInput, PassionOnProfileUncheckedUpdateManyWithoutPassionInput>
  }

  export type ProfileCreateWithoutSkillsInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    aptitudeTests?: AptitudeTestCreateNestedManyWithoutUserInput
    interests?: InterestOnProfileCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSkillsInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutSkillsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    name: string
    careers?: SkillOnCareerCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    careers?: SkillOnCareerUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutSkillsInput = {
    update: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfileUpdateWithoutSkillsInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    aptitudeTests?: AptitudeTestUpdateManyWithoutUserNestedInput
    interests?: InterestOnProfileUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    careers?: SkillOnCareerUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careers?: SkillOnCareerUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type ProfileCreateWithoutInterestsInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    aptitudeTests?: AptitudeTestCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutInterestsInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutInterestsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutInterestsInput, ProfileUncheckedCreateWithoutInterestsInput>
  }

  export type InterestCreateWithoutUsersInput = {
    name: string
    careers?: InterestOnCareerCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    careers?: InterestOnCareerUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestCreateOrConnectWithoutUsersInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutInterestsInput = {
    update: XOR<ProfileUpdateWithoutInterestsInput, ProfileUncheckedUpdateWithoutInterestsInput>
    create: XOR<ProfileCreateWithoutInterestsInput, ProfileUncheckedCreateWithoutInterestsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutInterestsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutInterestsInput, ProfileUncheckedUpdateWithoutInterestsInput>
  }

  export type ProfileUpdateWithoutInterestsInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    aptitudeTests?: AptitudeTestUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type InterestUpsertWithoutUsersInput = {
    update: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    where?: InterestWhereInput
  }

  export type InterestUpdateToOneWithWhereWithoutUsersInput = {
    where?: InterestWhereInput
    data: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type InterestUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    careers?: InterestOnCareerUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    careers?: InterestOnCareerUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type ProfileCreateWithoutPassionsInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    aptitudeTests?: AptitudeTestCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutPassionsInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    aptitudeTests?: AptitudeTestUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutPassionsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPassionsInput, ProfileUncheckedCreateWithoutPassionsInput>
  }

  export type PassionCreateWithoutUsersInput = {
    name: string
  }

  export type PassionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type PassionCreateOrConnectWithoutUsersInput = {
    where: PassionWhereUniqueInput
    create: XOR<PassionCreateWithoutUsersInput, PassionUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutPassionsInput = {
    update: XOR<ProfileUpdateWithoutPassionsInput, ProfileUncheckedUpdateWithoutPassionsInput>
    create: XOR<ProfileCreateWithoutPassionsInput, ProfileUncheckedCreateWithoutPassionsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPassionsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPassionsInput, ProfileUncheckedUpdateWithoutPassionsInput>
  }

  export type ProfileUpdateWithoutPassionsInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    aptitudeTests?: AptitudeTestUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPassionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    aptitudeTests?: AptitudeTestUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PassionUpsertWithoutUsersInput = {
    update: XOR<PassionUpdateWithoutUsersInput, PassionUncheckedUpdateWithoutUsersInput>
    create: XOR<PassionCreateWithoutUsersInput, PassionUncheckedCreateWithoutUsersInput>
    where?: PassionWhereInput
  }

  export type PassionUpdateToOneWithWhereWithoutUsersInput = {
    where?: PassionWhereInput
    data: XOR<PassionUpdateWithoutUsersInput, PassionUncheckedUpdateWithoutUsersInput>
  }

  export type PassionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PassionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateWithoutAptitudeTestsInput = {
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    skills?: SkillOnProfileCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAptitudeTestsInput = {
    id?: number
    userId: number
    age?: number | null
    sex?: string | null
    state?: string | null
    district?: string | null
    classLevel?: string | null
    category?: string | null
    skills?: SkillOnProfileUncheckedCreateNestedManyWithoutProfileInput
    interests?: InterestOnProfileUncheckedCreateNestedManyWithoutProfileInput
    passions?: PassionOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutAptitudeTestsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAptitudeTestsInput, ProfileUncheckedCreateWithoutAptitudeTestsInput>
  }

  export type ProfileUpsertWithoutAptitudeTestsInput = {
    update: XOR<ProfileUpdateWithoutAptitudeTestsInput, ProfileUncheckedUpdateWithoutAptitudeTestsInput>
    create: XOR<ProfileCreateWithoutAptitudeTestsInput, ProfileUncheckedCreateWithoutAptitudeTestsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAptitudeTestsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAptitudeTestsInput, ProfileUncheckedUpdateWithoutAptitudeTestsInput>
  }

  export type ProfileUpdateWithoutAptitudeTestsInput = {
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    skills?: SkillOnProfileUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAptitudeTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    classLevel?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    interests?: InterestOnProfileUncheckedUpdateManyWithoutProfileNestedInput
    passions?: PassionOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type DegreeOnCollegeCreateWithoutCollegeInput = {
    degree: DegreeCreateNestedOneWithoutCollegesInput
  }

  export type DegreeOnCollegeUncheckedCreateWithoutCollegeInput = {
    degreeId: number
  }

  export type DegreeOnCollegeCreateOrConnectWithoutCollegeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    create: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type DegreeOnCollegeCreateManyCollegeInputEnvelope = {
    data: DegreeOnCollegeCreateManyCollegeInput | DegreeOnCollegeCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type DegreeOnCollegeUpsertWithWhereUniqueWithoutCollegeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    update: XOR<DegreeOnCollegeUpdateWithoutCollegeInput, DegreeOnCollegeUncheckedUpdateWithoutCollegeInput>
    create: XOR<DegreeOnCollegeCreateWithoutCollegeInput, DegreeOnCollegeUncheckedCreateWithoutCollegeInput>
  }

  export type DegreeOnCollegeUpdateWithWhereUniqueWithoutCollegeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    data: XOR<DegreeOnCollegeUpdateWithoutCollegeInput, DegreeOnCollegeUncheckedUpdateWithoutCollegeInput>
  }

  export type DegreeOnCollegeUpdateManyWithWhereWithoutCollegeInput = {
    where: DegreeOnCollegeScalarWhereInput
    data: XOR<DegreeOnCollegeUpdateManyMutationInput, DegreeOnCollegeUncheckedUpdateManyWithoutCollegeInput>
  }

  export type DegreeOnCollegeScalarWhereInput = {
    AND?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
    OR?: DegreeOnCollegeScalarWhereInput[]
    NOT?: DegreeOnCollegeScalarWhereInput | DegreeOnCollegeScalarWhereInput[]
    collegeId?: IntFilter<"DegreeOnCollege"> | number
    degreeId?: IntFilter<"DegreeOnCollege"> | number
  }

  export type CareerOnDegreeCreateWithoutDegreeInput = {
    career: CareerCreateNestedOneWithoutDegreesRequiredInput
  }

  export type CareerOnDegreeUncheckedCreateWithoutDegreeInput = {
    careerId: number
  }

  export type CareerOnDegreeCreateOrConnectWithoutDegreeInput = {
    where: CareerOnDegreeWhereUniqueInput
    create: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput>
  }

  export type CareerOnDegreeCreateManyDegreeInputEnvelope = {
    data: CareerOnDegreeCreateManyDegreeInput | CareerOnDegreeCreateManyDegreeInput[]
    skipDuplicates?: boolean
  }

  export type DegreeOnCollegeCreateWithoutDegreeInput = {
    college: CollegeCreateNestedOneWithoutDegreesInput
  }

  export type DegreeOnCollegeUncheckedCreateWithoutDegreeInput = {
    collegeId: number
  }

  export type DegreeOnCollegeCreateOrConnectWithoutDegreeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    create: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput>
  }

  export type DegreeOnCollegeCreateManyDegreeInputEnvelope = {
    data: DegreeOnCollegeCreateManyDegreeInput | DegreeOnCollegeCreateManyDegreeInput[]
    skipDuplicates?: boolean
  }

  export type CareerOnDegreeUpsertWithWhereUniqueWithoutDegreeInput = {
    where: CareerOnDegreeWhereUniqueInput
    update: XOR<CareerOnDegreeUpdateWithoutDegreeInput, CareerOnDegreeUncheckedUpdateWithoutDegreeInput>
    create: XOR<CareerOnDegreeCreateWithoutDegreeInput, CareerOnDegreeUncheckedCreateWithoutDegreeInput>
  }

  export type CareerOnDegreeUpdateWithWhereUniqueWithoutDegreeInput = {
    where: CareerOnDegreeWhereUniqueInput
    data: XOR<CareerOnDegreeUpdateWithoutDegreeInput, CareerOnDegreeUncheckedUpdateWithoutDegreeInput>
  }

  export type CareerOnDegreeUpdateManyWithWhereWithoutDegreeInput = {
    where: CareerOnDegreeScalarWhereInput
    data: XOR<CareerOnDegreeUpdateManyMutationInput, CareerOnDegreeUncheckedUpdateManyWithoutDegreeInput>
  }

  export type CareerOnDegreeScalarWhereInput = {
    AND?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
    OR?: CareerOnDegreeScalarWhereInput[]
    NOT?: CareerOnDegreeScalarWhereInput | CareerOnDegreeScalarWhereInput[]
    careerId?: IntFilter<"CareerOnDegree"> | number
    degreeId?: IntFilter<"CareerOnDegree"> | number
  }

  export type DegreeOnCollegeUpsertWithWhereUniqueWithoutDegreeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    update: XOR<DegreeOnCollegeUpdateWithoutDegreeInput, DegreeOnCollegeUncheckedUpdateWithoutDegreeInput>
    create: XOR<DegreeOnCollegeCreateWithoutDegreeInput, DegreeOnCollegeUncheckedCreateWithoutDegreeInput>
  }

  export type DegreeOnCollegeUpdateWithWhereUniqueWithoutDegreeInput = {
    where: DegreeOnCollegeWhereUniqueInput
    data: XOR<DegreeOnCollegeUpdateWithoutDegreeInput, DegreeOnCollegeUncheckedUpdateWithoutDegreeInput>
  }

  export type DegreeOnCollegeUpdateManyWithWhereWithoutDegreeInput = {
    where: DegreeOnCollegeScalarWhereInput
    data: XOR<DegreeOnCollegeUpdateManyMutationInput, DegreeOnCollegeUncheckedUpdateManyWithoutDegreeInput>
  }

  export type CollegeCreateWithoutDegreesInput = {
    name: string
    location: string
  }

  export type CollegeUncheckedCreateWithoutDegreesInput = {
    id?: number
    name: string
    location: string
  }

  export type CollegeCreateOrConnectWithoutDegreesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutDegreesInput, CollegeUncheckedCreateWithoutDegreesInput>
  }

  export type DegreeCreateWithoutCollegesInput = {
    name: string
    field: string
    careers?: CareerOnDegreeCreateNestedManyWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutCollegesInput = {
    id?: number
    name: string
    field: string
    careers?: CareerOnDegreeUncheckedCreateNestedManyWithoutDegreeInput
  }

  export type DegreeCreateOrConnectWithoutCollegesInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutCollegesInput, DegreeUncheckedCreateWithoutCollegesInput>
  }

  export type CollegeUpsertWithoutDegreesInput = {
    update: XOR<CollegeUpdateWithoutDegreesInput, CollegeUncheckedUpdateWithoutDegreesInput>
    create: XOR<CollegeCreateWithoutDegreesInput, CollegeUncheckedCreateWithoutDegreesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutDegreesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutDegreesInput, CollegeUncheckedUpdateWithoutDegreesInput>
  }

  export type CollegeUpdateWithoutDegreesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUncheckedUpdateWithoutDegreesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type DegreeUpsertWithoutCollegesInput = {
    update: XOR<DegreeUpdateWithoutCollegesInput, DegreeUncheckedUpdateWithoutCollegesInput>
    create: XOR<DegreeCreateWithoutCollegesInput, DegreeUncheckedCreateWithoutCollegesInput>
    where?: DegreeWhereInput
  }

  export type DegreeUpdateToOneWithWhereWithoutCollegesInput = {
    where?: DegreeWhereInput
    data: XOR<DegreeUpdateWithoutCollegesInput, DegreeUncheckedUpdateWithoutCollegesInput>
  }

  export type DegreeUpdateWithoutCollegesInput = {
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    careers?: CareerOnDegreeUpdateManyWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutCollegesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    careers?: CareerOnDegreeUncheckedUpdateManyWithoutDegreeNestedInput
  }

  export type SkillOnCareerCreateWithoutCareerInput = {
    skill: SkillCreateNestedOneWithoutCareersInput
  }

  export type SkillOnCareerUncheckedCreateWithoutCareerInput = {
    skillId: number
  }

  export type SkillOnCareerCreateOrConnectWithoutCareerInput = {
    where: SkillOnCareerWhereUniqueInput
    create: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput>
  }

  export type SkillOnCareerCreateManyCareerInputEnvelope = {
    data: SkillOnCareerCreateManyCareerInput | SkillOnCareerCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type InterestOnCareerCreateWithoutCareerInput = {
    interest: InterestCreateNestedOneWithoutCareersInput
  }

  export type InterestOnCareerUncheckedCreateWithoutCareerInput = {
    interestId: number
  }

  export type InterestOnCareerCreateOrConnectWithoutCareerInput = {
    where: InterestOnCareerWhereUniqueInput
    create: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput>
  }

  export type InterestOnCareerCreateManyCareerInputEnvelope = {
    data: InterestOnCareerCreateManyCareerInput | InterestOnCareerCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type CareerOnDegreeCreateWithoutCareerInput = {
    degree: DegreeCreateNestedOneWithoutCareersInput
  }

  export type CareerOnDegreeUncheckedCreateWithoutCareerInput = {
    degreeId: number
  }

  export type CareerOnDegreeCreateOrConnectWithoutCareerInput = {
    where: CareerOnDegreeWhereUniqueInput
    create: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput>
  }

  export type CareerOnDegreeCreateManyCareerInputEnvelope = {
    data: CareerOnDegreeCreateManyCareerInput | CareerOnDegreeCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type SkillOnCareerUpsertWithWhereUniqueWithoutCareerInput = {
    where: SkillOnCareerWhereUniqueInput
    update: XOR<SkillOnCareerUpdateWithoutCareerInput, SkillOnCareerUncheckedUpdateWithoutCareerInput>
    create: XOR<SkillOnCareerCreateWithoutCareerInput, SkillOnCareerUncheckedCreateWithoutCareerInput>
  }

  export type SkillOnCareerUpdateWithWhereUniqueWithoutCareerInput = {
    where: SkillOnCareerWhereUniqueInput
    data: XOR<SkillOnCareerUpdateWithoutCareerInput, SkillOnCareerUncheckedUpdateWithoutCareerInput>
  }

  export type SkillOnCareerUpdateManyWithWhereWithoutCareerInput = {
    where: SkillOnCareerScalarWhereInput
    data: XOR<SkillOnCareerUpdateManyMutationInput, SkillOnCareerUncheckedUpdateManyWithoutCareerInput>
  }

  export type InterestOnCareerUpsertWithWhereUniqueWithoutCareerInput = {
    where: InterestOnCareerWhereUniqueInput
    update: XOR<InterestOnCareerUpdateWithoutCareerInput, InterestOnCareerUncheckedUpdateWithoutCareerInput>
    create: XOR<InterestOnCareerCreateWithoutCareerInput, InterestOnCareerUncheckedCreateWithoutCareerInput>
  }

  export type InterestOnCareerUpdateWithWhereUniqueWithoutCareerInput = {
    where: InterestOnCareerWhereUniqueInput
    data: XOR<InterestOnCareerUpdateWithoutCareerInput, InterestOnCareerUncheckedUpdateWithoutCareerInput>
  }

  export type InterestOnCareerUpdateManyWithWhereWithoutCareerInput = {
    where: InterestOnCareerScalarWhereInput
    data: XOR<InterestOnCareerUpdateManyMutationInput, InterestOnCareerUncheckedUpdateManyWithoutCareerInput>
  }

  export type CareerOnDegreeUpsertWithWhereUniqueWithoutCareerInput = {
    where: CareerOnDegreeWhereUniqueInput
    update: XOR<CareerOnDegreeUpdateWithoutCareerInput, CareerOnDegreeUncheckedUpdateWithoutCareerInput>
    create: XOR<CareerOnDegreeCreateWithoutCareerInput, CareerOnDegreeUncheckedCreateWithoutCareerInput>
  }

  export type CareerOnDegreeUpdateWithWhereUniqueWithoutCareerInput = {
    where: CareerOnDegreeWhereUniqueInput
    data: XOR<CareerOnDegreeUpdateWithoutCareerInput, CareerOnDegreeUncheckedUpdateWithoutCareerInput>
  }

  export type CareerOnDegreeUpdateManyWithWhereWithoutCareerInput = {
    where: CareerOnDegreeScalarWhereInput
    data: XOR<CareerOnDegreeUpdateManyMutationInput, CareerOnDegreeUncheckedUpdateManyWithoutCareerInput>
  }

  export type CareerCreateWithoutInterestRequiredInput = {
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutInterestRequiredInput = {
    id?: number
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerUncheckedCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutInterestRequiredInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutInterestRequiredInput, CareerUncheckedCreateWithoutInterestRequiredInput>
  }

  export type InterestCreateWithoutCareersInput = {
    name: string
    users?: InterestOnProfileCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
    users?: InterestOnProfileUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestCreateOrConnectWithoutCareersInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutCareersInput, InterestUncheckedCreateWithoutCareersInput>
  }

  export type CareerUpsertWithoutInterestRequiredInput = {
    update: XOR<CareerUpdateWithoutInterestRequiredInput, CareerUncheckedUpdateWithoutInterestRequiredInput>
    create: XOR<CareerCreateWithoutInterestRequiredInput, CareerUncheckedCreateWithoutInterestRequiredInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutInterestRequiredInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutInterestRequiredInput, CareerUncheckedUpdateWithoutInterestRequiredInput>
  }

  export type CareerUpdateWithoutInterestRequiredInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutInterestRequiredInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUncheckedUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type InterestUpsertWithoutCareersInput = {
    update: XOR<InterestUpdateWithoutCareersInput, InterestUncheckedUpdateWithoutCareersInput>
    create: XOR<InterestCreateWithoutCareersInput, InterestUncheckedCreateWithoutCareersInput>
    where?: InterestWhereInput
  }

  export type InterestUpdateToOneWithWhereWithoutCareersInput = {
    where?: InterestWhereInput
    data: XOR<InterestUpdateWithoutCareersInput, InterestUncheckedUpdateWithoutCareersInput>
  }

  export type InterestUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: InterestOnProfileUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: InterestOnProfileUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type CareerCreateWithoutSkillsRequiredInput = {
    userId: number
    title: string
    description: string
    salary?: number | null
    interestRequired?: InterestOnCareerCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutSkillsRequiredInput = {
    id?: number
    userId: number
    title: string
    description: string
    salary?: number | null
    interestRequired?: InterestOnCareerUncheckedCreateNestedManyWithoutCareerInput
    degreesRequired?: CareerOnDegreeUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutSkillsRequiredInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutSkillsRequiredInput, CareerUncheckedCreateWithoutSkillsRequiredInput>
  }

  export type SkillCreateWithoutCareersInput = {
    name: string
    users?: SkillOnProfileCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
    users?: SkillOnProfileUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCareersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCareersInput, SkillUncheckedCreateWithoutCareersInput>
  }

  export type CareerUpsertWithoutSkillsRequiredInput = {
    update: XOR<CareerUpdateWithoutSkillsRequiredInput, CareerUncheckedUpdateWithoutSkillsRequiredInput>
    create: XOR<CareerCreateWithoutSkillsRequiredInput, CareerUncheckedCreateWithoutSkillsRequiredInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutSkillsRequiredInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutSkillsRequiredInput, CareerUncheckedUpdateWithoutSkillsRequiredInput>
  }

  export type CareerUpdateWithoutSkillsRequiredInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    interestRequired?: InterestOnCareerUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutSkillsRequiredInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    interestRequired?: InterestOnCareerUncheckedUpdateManyWithoutCareerNestedInput
    degreesRequired?: CareerOnDegreeUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type SkillUpsertWithoutCareersInput = {
    update: XOR<SkillUpdateWithoutCareersInput, SkillUncheckedUpdateWithoutCareersInput>
    create: XOR<SkillCreateWithoutCareersInput, SkillUncheckedCreateWithoutCareersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutCareersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutCareersInput, SkillUncheckedUpdateWithoutCareersInput>
  }

  export type SkillUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: SkillOnProfileUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: SkillOnProfileUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type CareerCreateWithoutDegreesRequiredInput = {
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerCreateNestedManyWithoutCareerInput
    interestRequired?: InterestOnCareerCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutDegreesRequiredInput = {
    id?: number
    userId: number
    title: string
    description: string
    salary?: number | null
    skillsRequired?: SkillOnCareerUncheckedCreateNestedManyWithoutCareerInput
    interestRequired?: InterestOnCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutDegreesRequiredInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutDegreesRequiredInput, CareerUncheckedCreateWithoutDegreesRequiredInput>
  }

  export type DegreeCreateWithoutCareersInput = {
    name: string
    field: string
    colleges?: DegreeOnCollegeCreateNestedManyWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
    field: string
    colleges?: DegreeOnCollegeUncheckedCreateNestedManyWithoutDegreeInput
  }

  export type DegreeCreateOrConnectWithoutCareersInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutCareersInput, DegreeUncheckedCreateWithoutCareersInput>
  }

  export type CareerUpsertWithoutDegreesRequiredInput = {
    update: XOR<CareerUpdateWithoutDegreesRequiredInput, CareerUncheckedUpdateWithoutDegreesRequiredInput>
    create: XOR<CareerCreateWithoutDegreesRequiredInput, CareerUncheckedCreateWithoutDegreesRequiredInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutDegreesRequiredInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutDegreesRequiredInput, CareerUncheckedUpdateWithoutDegreesRequiredInput>
  }

  export type CareerUpdateWithoutDegreesRequiredInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUpdateManyWithoutCareerNestedInput
    interestRequired?: InterestOnCareerUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutDegreesRequiredInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    skillsRequired?: SkillOnCareerUncheckedUpdateManyWithoutCareerNestedInput
    interestRequired?: InterestOnCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type DegreeUpsertWithoutCareersInput = {
    update: XOR<DegreeUpdateWithoutCareersInput, DegreeUncheckedUpdateWithoutCareersInput>
    create: XOR<DegreeCreateWithoutCareersInput, DegreeUncheckedCreateWithoutCareersInput>
    where?: DegreeWhereInput
  }

  export type DegreeUpdateToOneWithWhereWithoutCareersInput = {
    where?: DegreeWhereInput
    data: XOR<DegreeUpdateWithoutCareersInput, DegreeUncheckedUpdateWithoutCareersInput>
  }

  export type DegreeUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    colleges?: DegreeOnCollegeUpdateManyWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    colleges?: DegreeOnCollegeUncheckedUpdateManyWithoutDegreeNestedInput
  }

  export type AptitudeTestCreateManyUserInput = {
    id?: number
    dateTaken?: Date | string
    scores: JsonNullValueInput | InputJsonValue
    total: number
  }

  export type SkillOnProfileCreateManyProfileInput = {
    skillId: number
  }

  export type InterestOnProfileCreateManyProfileInput = {
    interestId: number
  }

  export type PassionOnProfileCreateManyProfileInput = {
    passionId: number
  }

  export type AptitudeTestUpdateWithoutUserInput = {
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type AptitudeTestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type AptitudeTestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: JsonNullValueInput | InputJsonValue
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnProfileUpdateWithoutProfileInput = {
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SkillOnProfileUncheckedUpdateWithoutProfileInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnProfileUncheckedUpdateManyWithoutProfileInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileUpdateWithoutProfileInput = {
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type InterestOnProfileUncheckedUpdateWithoutProfileInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileUncheckedUpdateManyWithoutProfileInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileUpdateWithoutProfileInput = {
    passion?: PassionUpdateOneRequiredWithoutUsersNestedInput
  }

  export type PassionOnProfileUncheckedUpdateWithoutProfileInput = {
    passionId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileUncheckedUpdateManyWithoutProfileInput = {
    passionId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnProfileCreateManySkillInput = {
    profileId: number
  }

  export type SkillOnCareerCreateManySkillInput = {
    careerId: number
  }

  export type SkillOnProfileUpdateWithoutSkillInput = {
    profile?: ProfileUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillOnProfileUncheckedUpdateWithoutSkillInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnProfileUncheckedUpdateManyWithoutSkillInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerUpdateWithoutSkillInput = {
    career?: CareerUpdateOneRequiredWithoutSkillsRequiredNestedInput
  }

  export type SkillOnCareerUncheckedUpdateWithoutSkillInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerUncheckedUpdateManyWithoutSkillInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileCreateManyInterestInput = {
    profileId: number
  }

  export type InterestOnCareerCreateManyInterestInput = {
    careerId: number
  }

  export type InterestOnProfileUpdateWithoutInterestInput = {
    profile?: ProfileUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestOnProfileUncheckedUpdateWithoutInterestInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnProfileUncheckedUpdateManyWithoutInterestInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnCareerUpdateWithoutInterestInput = {
    career?: CareerUpdateOneRequiredWithoutInterestRequiredNestedInput
  }

  export type InterestOnCareerUncheckedUpdateWithoutInterestInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnCareerUncheckedUpdateManyWithoutInterestInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileCreateManyPassionInput = {
    profileId: number
  }

  export type PassionOnProfileUpdateWithoutPassionInput = {
    profile?: ProfileUpdateOneRequiredWithoutPassionsNestedInput
  }

  export type PassionOnProfileUncheckedUpdateWithoutPassionInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type PassionOnProfileUncheckedUpdateManyWithoutPassionInput = {
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type DegreeOnCollegeCreateManyCollegeInput = {
    degreeId: number
  }

  export type DegreeOnCollegeUpdateWithoutCollegeInput = {
    degree?: DegreeUpdateOneRequiredWithoutCollegesNestedInput
  }

  export type DegreeOnCollegeUncheckedUpdateWithoutCollegeInput = {
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type DegreeOnCollegeUncheckedUpdateManyWithoutCollegeInput = {
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeCreateManyDegreeInput = {
    careerId: number
  }

  export type DegreeOnCollegeCreateManyDegreeInput = {
    collegeId: number
  }

  export type CareerOnDegreeUpdateWithoutDegreeInput = {
    career?: CareerUpdateOneRequiredWithoutDegreesRequiredNestedInput
  }

  export type CareerOnDegreeUncheckedUpdateWithoutDegreeInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeUncheckedUpdateManyWithoutDegreeInput = {
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type DegreeOnCollegeUpdateWithoutDegreeInput = {
    college?: CollegeUpdateOneRequiredWithoutDegreesNestedInput
  }

  export type DegreeOnCollegeUncheckedUpdateWithoutDegreeInput = {
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type DegreeOnCollegeUncheckedUpdateManyWithoutDegreeInput = {
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerCreateManyCareerInput = {
    skillId: number
  }

  export type InterestOnCareerCreateManyCareerInput = {
    interestId: number
  }

  export type CareerOnDegreeCreateManyCareerInput = {
    degreeId: number
  }

  export type SkillOnCareerUpdateWithoutCareerInput = {
    skill?: SkillUpdateOneRequiredWithoutCareersNestedInput
  }

  export type SkillOnCareerUncheckedUpdateWithoutCareerInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillOnCareerUncheckedUpdateManyWithoutCareerInput = {
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnCareerUpdateWithoutCareerInput = {
    interest?: InterestUpdateOneRequiredWithoutCareersNestedInput
  }

  export type InterestOnCareerUncheckedUpdateWithoutCareerInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestOnCareerUncheckedUpdateManyWithoutCareerInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeUpdateWithoutCareerInput = {
    degree?: DegreeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareerOnDegreeUncheckedUpdateWithoutCareerInput = {
    degreeId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerOnDegreeUncheckedUpdateManyWithoutCareerInput = {
    degreeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}