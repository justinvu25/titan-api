export type Maybe<T> = T | null

export interface RegisterUserInput {
	name: string

	email: string

	password: string
}

export interface DeleteUserInput {
	id: string
}

export interface LoginCredentials {
	email: string

	password: string
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
}

export interface User {
	_id: string

	name: string

	email: string
}

export interface Mutation {
	registerUser: User

	deleteUser: DeleteUserPayload

	login: LoginPayload
}

export interface DeleteUserPayload {
	id: string
}

export interface LoginPayload {
	accessToken: string

	expiresIn: string
}

// ====================================================
// Arguments
// ====================================================

export interface RegisterUserMutationArgs {
	input: RegisterUserInput
}
export interface DeleteUserMutationArgs {
	input: DeleteUserInput
}
export interface LoginMutationArgs {
	input: LoginCredentials
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
}

export type QueryUsersResolver<
	R = User[],
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext>

export interface UserResolvers<TContext = {}, TypeParent = User> {
	_id?: User_IdResolver<string, TypeParent, TContext>

	name?: UserNameResolver<string, TypeParent, TContext>

	email?: UserEmailResolver<string, TypeParent, TContext>
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

export interface MutationResolvers<TContext = {}, TypeParent = {}> {
	registerUser?: MutationRegisterUserResolver<User, TypeParent, TContext>

	deleteUser?: MutationDeleteUserResolver<
		DeleteUserPayload,
		TypeParent,
		TContext
	>

	login?: MutationLoginResolver<LoginPayload, TypeParent, TContext>
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
> = Resolver<R, Parent, TContext, MutationDeleteUserArgs>
export interface MutationDeleteUserArgs {
	input: DeleteUserInput
}

export type MutationLoginResolver<
	R = LoginPayload,
	Parent = {},
	TContext = {}
> = Resolver<R, Parent, TContext, MutationLoginArgs>
export interface MutationLoginArgs {
	input: LoginCredentials
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
	Mutation?: MutationResolvers<TContext>
	DeleteUserPayload?: DeleteUserPayloadResolvers<TContext>
	LoginPayload?: LoginPayloadResolvers<TContext>
	Upload?: GraphQLScalarType
} & { [typeName: string]: never }

export type IDirectiveResolvers<Result> = {
	cacheControl?: CacheControlDirectiveResolver<Result>
	skip?: SkipDirectiveResolver<Result>
	include?: IncludeDirectiveResolver<Result>
	deprecated?: DeprecatedDirectiveResolver<Result>
} & { [directiveName: string]: never }
