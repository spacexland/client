export type Maybe<T> = T | null;

/** ordering options when selecting data from "users" */
export interface UsersOrderBy {
  id?: Maybe<OrderBy>;

  name?: Maybe<OrderBy>;

  rocket?: Maybe<OrderBy>;

  timestamp?: Maybe<OrderBy>;

  twitter?: Maybe<OrderBy>;
}
/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: Maybe<(Maybe<UsersBoolExp>)[]>;

  _not?: Maybe<UsersBoolExp>;

  _or?: Maybe<(Maybe<UsersBoolExp>)[]>;

  id?: Maybe<UuidComparisonExp>;

  name?: Maybe<StringComparisonExp>;

  rocket?: Maybe<StringComparisonExp>;

  timestamp?: Maybe<TimestamptzComparisonExp>;

  twitter?: Maybe<StringComparisonExp>;
}
/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Maybe<Uuid>;

  _gt?: Maybe<Uuid>;

  _gte?: Maybe<Uuid>;

  _in?: Maybe<Uuid[]>;

  _is_null?: Maybe<boolean>;

  _lt?: Maybe<Uuid>;

  _lte?: Maybe<Uuid>;

  _neq?: Maybe<Uuid>;

  _nin?: Maybe<Uuid[]>;
}
/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Maybe<string>;

  _gt?: Maybe<string>;

  _gte?: Maybe<string>;

  _ilike?: Maybe<string>;

  _in?: Maybe<string[]>;

  _is_null?: Maybe<boolean>;

  _like?: Maybe<string>;

  _lt?: Maybe<string>;

  _lte?: Maybe<string>;

  _neq?: Maybe<string>;

  _nilike?: Maybe<string>;

  _nin?: Maybe<string[]>;

  _nlike?: Maybe<string>;

  _nsimilar?: Maybe<string>;

  _similar?: Maybe<string>;
}
/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Maybe<Timestamptz>;

  _gt?: Maybe<Timestamptz>;

  _gte?: Maybe<Timestamptz>;

  _in?: Maybe<Timestamptz[]>;

  _is_null?: Maybe<boolean>;

  _lt?: Maybe<Timestamptz>;

  _lte?: Maybe<Timestamptz>;

  _neq?: Maybe<Timestamptz>;

  _nin?: Maybe<Timestamptz[]>;
}

export interface CapsulesFind {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  mission?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CoresFind {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  id?: Maybe<string>;

  start?: Maybe<Date>;
}

export interface LaunchFind {
  apoapsis_km?: Maybe<number>;

  block?: Maybe<number>;

  cap_serial?: Maybe<string>;

  capsule_reuse?: Maybe<string>;

  core_flight?: Maybe<number>;

  core_reuse?: Maybe<string>;

  core_serial?: Maybe<string>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  end?: Maybe<Date>;

  epoch?: Maybe<Date>;

  fairings_recovered?: Maybe<string>;

  fairings_recovery_attempt?: Maybe<string>;

  fairings_reuse?: Maybe<string>;

  fairings_reused?: Maybe<string>;

  fairings_ship?: Maybe<string>;

  gridfins?: Maybe<string>;

  id?: Maybe<string>;

  inclination_deg?: Maybe<number>;

  land_success?: Maybe<string>;

  landing_intent?: Maybe<string>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  launch_date_local?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_success?: Maybe<string>;

  launch_year?: Maybe<string>;

  legs?: Maybe<string>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  mission_id?: Maybe<string>;

  mission_name?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  second_stage_block?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;

  ship?: Maybe<string>;

  side_core1_reuse?: Maybe<string>;

  side_core2_reuse?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;

  start?: Maybe<Date>;

  tbd?: Maybe<string>;

  tentative_max_precision?: Maybe<string>;

  tentative?: Maybe<string>;
}

export interface MissionsFind {
  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  name?: Maybe<string>;

  payload_id?: Maybe<string>;
}

export interface PayloadsFind {
  apoapsis_km?: Maybe<number>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<boolean>;

  semi_major_axis_km?: Maybe<number>;
}

export interface ShipsFind {
  id?: Maybe<string>;

  name?: Maybe<string>;

  model?: Maybe<string>;

  type?: Maybe<string>;

  role?: Maybe<string>;

  active?: Maybe<boolean>;

  imo?: Maybe<number>;

  mmsi?: Maybe<number>;

  abs?: Maybe<number>;

  class?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  weight_kg?: Maybe<number>;

  year_built?: Maybe<number>;

  home_port?: Maybe<string>;

  status?: Maybe<string>;

  speed_kn?: Maybe<number>;

  course_deg?: Maybe<number>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  successful_landings?: Maybe<number>;

  attempted_landings?: Maybe<number>;

  mission?: Maybe<string>;
}
/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  id?: Maybe<Uuid>;

  name?: Maybe<string>;

  rocket?: Maybe<string>;

  timestamp?: Maybe<Timestamptz>;

  twitter?: Maybe<string>;
}
/** on conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint;

  update_columns: UsersUpdateColumn[];
}
/** input type for updating data in table "users" */
export interface UsersSetInput {
  id?: Maybe<Uuid>;

  name?: Maybe<string>;

  rocket?: Maybe<string>;

  timestamp?: Maybe<Timestamptz>;

  twitter?: Maybe<string>;
}
/** order by aggregate values of table "users" */
export interface UsersAggregateOrderBy {
  count?: Maybe<OrderBy>;

  max?: Maybe<UsersMaxOrderBy>;

  min?: Maybe<UsersMinOrderBy>;
}
/** order by max() on columns of table "users" */
export interface UsersMaxOrderBy {
  name?: Maybe<OrderBy>;

  rocket?: Maybe<OrderBy>;

  timestamp?: Maybe<OrderBy>;

  twitter?: Maybe<OrderBy>;
}
/** order by min() on columns of table "users" */
export interface UsersMinOrderBy {
  name?: Maybe<OrderBy>;

  rocket?: Maybe<OrderBy>;

  timestamp?: Maybe<OrderBy>;

  twitter?: Maybe<OrderBy>;
}
/** input type for inserting array relation for remote table "users" */
export interface UsersArrRelInsertInput {
  data: UsersInsertInput[];

  on_conflict?: Maybe<UsersOnConflict>;
}
/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput;

  on_conflict?: Maybe<UsersOnConflict>;
}
/** select columns of table "users" */
export enum UsersSelectColumn {
  Id = "id",
  Name = "name",
  Rocket = "rocket",
  Timestamp = "timestamp",
  Twitter = "twitter"
}
/** column ordering options */
export enum OrderBy {
  Asc = "asc",
  AscNullsFirst = "asc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  Desc = "desc",
  DescNullsFirst = "desc_nulls_first",
  DescNullsLast = "desc_nulls_last"
}
/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  UsersPkey = "users_pkey"
}
/** update columns of table "users" */
export enum UsersUpdateColumn {
  Id = "id",
  Name = "name",
  Rocket = "rocket",
  Timestamp = "timestamp",
  Twitter = "twitter"
}
/** conflict action */
export enum ConflictAction {
  Ignore = "ignore",
  Update = "update"
}

export type Uuid = any;

export type Timestamptz = any;

export type Date = any;

export type ObjectId = any;

// ====================================================
// Documents
// ====================================================

export namespace GetLaunch {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    launch: Maybe<Launch>;
  };

  export type Launch = {
    __typename?: "Launch";

    name: Maybe<string>;

    details: Maybe<string>;

    date: Maybe<Date>;

    success: Maybe<boolean>;

    links: Maybe<Links>;

    rocket: Maybe<Rocket>;
  };

  export type Links = {
    __typename?: "LaunchLinks";

    video: Maybe<string>;

    images: Maybe<(Maybe<string>)[]>;
  };

  export type Rocket = {
    __typename?: "LaunchRocket";

    name: Maybe<string>;
  };
}

export namespace GetLaunches {
  export type Variables = {
    name?: Maybe<string>;
    limit?: Maybe<number>;
    offset?: Maybe<number>;
  };

  export type Query = {
    __typename?: "Query";

    launchesPastResult: Maybe<LaunchesPastResult>;
  };

  export type LaunchesPastResult = {
    __typename?: "LaunchesPastResult";

    result: Maybe<Result>;

    data: Maybe<(Maybe<Data>)[]>;
  };

  export type Result = {
    __typename?: "Result";

    totalCount: Maybe<number>;
  };

  export type Data = {
    __typename?: "Launch";

    id: Maybe<string>;

    mission_name: Maybe<string>;
  };
}

export namespace GetMission {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    mission: Maybe<Mission>;
  };

  export type Mission = {
    __typename?: "Mission";

    name: Maybe<string>;

    description: Maybe<string>;

    manufacturers: Maybe<(Maybe<string>)[]>;

    twitter: Maybe<string>;

    website: Maybe<string>;

    wikipedia: Maybe<string>;
  };
}

export namespace GetMissions {
  export type Variables = {
    name?: Maybe<string>;
    limit?: Maybe<number>;
    offset?: Maybe<number>;
  };

  export type Query = {
    __typename?: "Query";

    missionsResult: Maybe<MissionsResult>;
  };

  export type MissionsResult = {
    __typename?: "MissionResult";

    result: Maybe<Result>;

    data: Maybe<(Maybe<Data>)[]>;
  };

  export type Result = {
    __typename?: "Result";

    totalCount: Maybe<number>;
  };

  export type Data = {
    __typename?: "Mission";

    id: Maybe<string>;

    name: Maybe<string>;
  };
}

export namespace GetRocket {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    rocket: Maybe<Rocket>;
  };

  export type Rocket = {
    __typename?: "Rocket";

    name: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace GetRockets {
  export type Variables = {
    limit?: Maybe<number>;
    offset?: Maybe<number>;
  };

  export type Query = {
    __typename?: "Query";

    rocketsResult: Maybe<RocketsResult>;
  };

  export type RocketsResult = {
    __typename?: "RocketsResult";

    result: Maybe<Result>;

    data: Maybe<(Maybe<Data>)[]>;
  };

  export type Result = {
    __typename?: "Result";

    totalCount: Maybe<number>;
  };

  export type Data = {
    __typename?: "Rocket";

    id: Maybe<string>;

    name: Maybe<string>;
  };
}

export namespace GetShip {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    ship: Maybe<Ship>;
  };

  export type Ship = {
    __typename?: "Ship";

    name: Maybe<string>;

    port: Maybe<string>;

    image: Maybe<string>;
  };
}

export namespace GetShips {
  export type Variables = {
    name?: Maybe<string>;
    limit?: Maybe<number>;
    offset?: Maybe<number>;
  };

  export type Query = {
    __typename?: "Query";

    shipsResult: Maybe<ShipsResult>;
  };

  export type ShipsResult = {
    __typename?: "ShipsResult";

    result: Maybe<Result>;

    data: Maybe<(Maybe<Data>)[]>;
  };

  export type Result = {
    __typename?: "Result";

    totalCount: Maybe<number>;
  };

  export type Data = {
    __typename?: "Ship";

    id: Maybe<string>;

    name: Maybe<string>;
  };
}
