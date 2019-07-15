export type Maybe<T> = T | null

export interface RegisterUserInput {
	name: string

	email: string

	password: string
}

export interface UpdateUserInput {
	name?: Maybe<string>

	email?: Maybe<string>

	isReady?: Maybe<boolean>
}

export interface LoginCredentials {
	email: string

	password: string
}

export interface CreateRoomMutationArgs {
	name: string
}

export interface JoinRoomMutationArgs {
	pin: string
}

export interface DeleteRoomMutationArgs {
	roomId: string
}

export interface LeaveRoomMutationArgs {
	roomId: string
}

export enum CacheControlScope {
	Public = 'PUBLIC',
	Private = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
	users: User[]

	user: User

	room?: Maybe<Room>

	rooms: (Maybe<Room>)[]
}

export interface User {
	_id: string

	name: string

	email: string

	isReady: boolean

	room?: Maybe<Room>
}

export interface Room {
	_id: string

	name: string

	userIds: string[]

	pin: string

	sessionStarted?: Maybe<boolean>

	votingCompleted?: Maybe<boolean>

	roomOwner: User

	party: User[]
}

export interface Mutation {
	registerUser: User

	deleteUser: DeleteUserPayload

	updateUser: User

	login: LoginPayload

	createRoom: Room

	joinRoom: Room

	deleteRoom: DeleteRoomMutationPayload

	leaveRoom: LeaveRoomMutationPayload
}

export interface DeleteUserPayload {
	id: string
}

export interface LoginPayload {
	accessToken: string

	expiresIn: string
}

export interface DeleteRoomMutationPayload {
	id: string
}

export interface LeaveRoomMutationPayload {
	success: boolean
}

export interface Subscription {
	userUpdated: User
}

// ====================================================
// Arguments
// ====================================================

export interface RegisterUserMutationArgs {
	input: RegisterUserInput
}
export interface UpdateUserMutationArgs {
	input: UpdateUserInput
}
export interface LoginMutationArgs {
	input: LoginCredentials
}
export interface CreateRoomMutationArgs {
	input: CreateRoomMutationArgs
}
export interface JoinRoomMutationArgs {
	input: JoinRoomMutationArgs
}
export interface DeleteRoomMutationArgs {
	input: DeleteRoomMutationArgs
}
export interface LeaveRoomMutationArgs {
	input: LeaveRoomMutationArgs
}

import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from 'graphql'

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
	parent: Parent,
	args: Args,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<Result> | Result

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
	subscribe<R = Result, P = Parent>(
		parent: P,
		args: Args,
		context: TContext,
		info: GraphQLResolveInfo,
	): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>
	resolve?<R = Result, P = Parent>(
		parent: P,
		args: Args,
		context: TContext,
		info: GraphQLResolveInfo,
	): R | Result | Promise<R | Result>
}

export type SubscriptionResolver<
	Result,
	Parent = {},
	TContext = {},
	Args = {}
> =
	| ((
			...args: any[]
	  ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
	| ISubscriptionResolverObject<Result, Parent, TContext, Args>

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
	parent: Parent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<Types>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
	next: NextResolverFn<TResult>,
	source: any,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface QueryResolvers<TContext = {}, TypeParent = {}> {
	users?: QueryUsersResolver<User[], TypeParent, TContext>

	user?: QueryUserResolver<User, TypeParent, TContext>

	room?: QueryRoomResolver<Maybe<Room>, TypeParent, TContext>

	rooms?: QueryRoomsResolver<(Maybe<Room>)[], TypeParent, TContext>
}

export type QueryUsersResolver<
	R = User[],
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext>
export type QueryUserResolver<R = User, Parent = {}, TContext = {}> = Resolver<
	R,
	Parent,
	TContext
>
export type QueryRoomResolver<
	R = Maybe<Room>,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext>
export type QueryRoomsResolver<
	R = (Maybe<Room>)[],
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface UserResolvers<TContext = {}, TypeParent = User> {
	_id?: User_IdResolver<string, TypeParent, TContext>

	name?: UserNameResolver<string, TypeParent, TContext>

	email?: UserEmailResolver<string, TypeParent, TContext>

	isReady?: UserIsReadyResolver<boolean, TypeParent, TContext>

	room?: UserRoomResolver<Maybe<Room>, TypeParent, TContext>
}

export type User_IdResolver<
	R = string,
	Parent = User,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type UserNameResolver<
	R = string,
	Parent = User,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type UserEmailResolver<
	R = string,
	Parent = User,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type UserIsReadyResolver<
	R = boolean,
	Parent = User,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type UserRoomResolver<
	R = Maybe<Room>,
	Parent = User,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface RoomResolvers<TContext = {}, TypeParent = Room> {
	_id?: Room_IdResolver<string, TypeParent, TContext>

	name?: RoomNameResolver<string, TypeParent, TContext>

	userIds?: RoomUserIdsResolver<string[], TypeParent, TContext>

	pin?: RoomPinResolver<string, TypeParent, TContext>

	sessionStarted?: RoomSessionStartedResolver<
		Maybe<boolean>,
		TypeParent,
		TContext
	>

	votingCompleted?: RoomVotingCompletedResolver<
		Maybe<boolean>,
		TypeParent,
		TContext
	>

	roomOwner?: RoomRoomOwnerResolver<User, TypeParent, TContext>

	party?: RoomPartyResolver<User[], TypeParent, TContext>
}

export type Room_IdResolver<
	R = string,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomNameResolver<
	R = string,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomUserIdsResolver<
	R = string[],
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomPinResolver<
	R = string,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomSessionStartedResolver<
	R = Maybe<boolean>,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomVotingCompletedResolver<
	R = Maybe<boolean>,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomRoomOwnerResolver<
	R = User,
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type RoomPartyResolver<
	R = User[],
	Parent = Room,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface MutationResolvers<TContext = {}, TypeParent = {}> {
	registerUser?: MutationRegisterUserResolver<User, TypeParent, TContext>

	deleteUser?: MutationDeleteUserResolver<
		DeleteUserPayload,
		TypeParent,
		TContext
	>

	updateUser?: MutationUpdateUserResolver<User, TypeParent, TContext>

	login?: MutationLoginResolver<LoginPayload, TypeParent, TContext>

	createRoom?: MutationCreateRoomResolver<Room, TypeParent, TContext>

	joinRoom?: MutationJoinRoomResolver<Room, TypeParent, TContext>

	deleteRoom?: MutationDeleteRoomResolver<
		DeleteRoomMutationPayload,
		TypeParent,
		TContext
	>

	leaveRoom?: MutationLeaveRoomResolver<
		LeaveRoomMutationPayload,
		TypeParent,
		TContext
	>
}

export type MutationRegisterUserResolver<
	R = User,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationRegisterUserArgs>
export interface MutationRegisterUserArgs {
	input: RegisterUserInput
}

export type MutationDeleteUserResolver<
	R = DeleteUserPayload,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext>
export type MutationUpdateUserResolver<
	R = User,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationUpdateUserArgs>
export interface MutationUpdateUserArgs {
	input: UpdateUserInput
}

export type MutationLoginResolver<
	R = LoginPayload,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationLoginArgs>
export interface MutationLoginArgs {
	input: LoginCredentials
}

export type MutationCreateRoomResolver<
	R = Room,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationCreateRoomArgs>
export interface MutationCreateRoomArgs {
	input: CreateRoomMutationArgs
}

export type MutationJoinRoomResolver<
	R = Room,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationJoinRoomArgs>
export interface MutationJoinRoomArgs {
	input: JoinRoomMutationArgs
}

export type MutationDeleteRoomResolver<
	R = DeleteRoomMutationPayload,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationDeleteRoomArgs>
export interface MutationDeleteRoomArgs {
	input: DeleteRoomMutationArgs
}

export type MutationLeaveRoomResolver<
	R = LeaveRoomMutationPayload,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationLeaveRoomArgs>
export interface MutationLeaveRoomArgs {
	input: LeaveRoomMutationArgs
}

export interface DeleteUserPayloadResolvers<
	TContext = {},
	TypeParent = DeleteUserPayload
> {
	id?: DeleteUserPayloadIdResolver<string, TypeParent, TContext>
}

export type DeleteUserPayloadIdResolver<
	R = string,
	Parent = DeleteUserPayload,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface LoginPayloadResolvers<
	TContext = {},
	TypeParent = LoginPayload
> {
	accessToken?: LoginPayloadAccessTokenResolver<string, TypeParent, TContext>

	expiresIn?: LoginPayloadExpiresInResolver<string, TypeParent, TContext>
}

export type LoginPayloadAccessTokenResolver<
	R = string,
	Parent = LoginPayload,
	TContext = {}
> = Resolver<R, Parent, TContext>
export type LoginPayloadExpiresInResolver<
	R = string,
	Parent = LoginPayload,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface DeleteRoomMutationPayloadResolvers<
	TContext = {},
	TypeParent = DeleteRoomMutationPayload
> {
	id?: DeleteRoomMutationPayloadIdResolver<string, TypeParent, TContext>
}

export type DeleteRoomMutationPayloadIdResolver<
	R = string,
	Parent = DeleteRoomMutationPayload,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface LeaveRoomMutationPayloadResolvers<
	TContext = {},
	TypeParent = LeaveRoomMutationPayload
> {
	success?: LeaveRoomMutationPayloadSuccessResolver<
		boolean,
		TypeParent,
		TContext
	>
}

export type LeaveRoomMutationPayloadSuccessResolver<
	R = boolean,
	Parent = LeaveRoomMutationPayload,
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface SubscriptionResolvers<TContext = {}, TypeParent = {}> {
	userUpdated?: SubscriptionUserUpdatedResolver<User, TypeParent, TContext>
}

export type SubscriptionUserUpdatedResolver<
	R = User,
	Parent = {},
	TContext = {}
> = SubscriptionResolver<R, Parent, TContext>

export type CacheControlDirectiveResolver<Result> = DirectiveResolverFn<
	Result,
	CacheControlDirectiveArgs,
	{}
>
export interface CacheControlDirectiveArgs {
	maxAge?: Maybe<number>

	scope?: Maybe<CacheControlScope>
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
	Result,
	SkipDirectiveArgs,
	{}
>
export interface SkipDirectiveArgs {
	/** Skipped when true. */
	if: boolean
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
	Result,
	IncludeDirectiveArgs,
	{}
>
export interface IncludeDirectiveArgs {
	/** Included when true. */
	if: boolean
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
	Result,
	DeprecatedDirectiveArgs,
	{}
>
export interface DeprecatedDirectiveArgs {
	/** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
	reason?: string
}

export interface UploadScalarConfig
	extends GraphQLScalarTypeConfig<Upload, any> {
	name: 'Upload'
}

export type IResolvers<TContext = {}> = {
	Query?: QueryResolvers<TContext>
	User?: UserResolvers<TContext>
	Room?: RoomResolvers<TContext>
	Mutation?: MutationResolvers<TContext>
	DeleteUserPayload?: DeleteUserPayloadResolvers<TContext>
	LoginPayload?: LoginPayloadResolvers<TContext>
	DeleteRoomMutationPayload?: DeleteRoomMutationPayloadResolvers<TContext>
	LeaveRoomMutationPayload?: LeaveRoomMutationPayloadResolvers<TContext>
	Subscription?: SubscriptionResolvers<TContext>
	Upload?: GraphQLScalarType
} & { [typeName: string]: never }

export type IDirectiveResolvers<Result> = {
	cacheControl?: CacheControlDirectiveResolver<Result>
	skip?: SkipDirectiveResolver<Result>
	include?: IncludeDirectiveResolver<Result>
	deprecated?: DeprecatedDirectiveResolver<Result>
} & { [directiveName: string]: never }
