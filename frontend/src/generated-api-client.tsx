/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps } from "restful-react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const encodingFn = encodeURIComponent;

const encodingTagFactory = (encodingFn: typeof encodeURIComponent) => (
  strings: TemplateStringsArray,
  ...params: (string | number | boolean)[]
) =>
  strings.reduce(
    (accumulatedPath, pathPart, idx) =>
      `${accumulatedPath}${pathPart}${
        idx < params.length ? encodingFn(params[idx]) : ""
      }`,
    ""
  );

const encode = encodingTagFactory(encodingFn);

export interface Event {
  id?: number;
  /**
   * Event ID used at source
   */
  sourceEventId: string;
  /**
   * Event details URL at source
   */
  sourceUrl?: string | null;
  /**
   * License under which source published event data
   */
  sourceLicense?: string | null;
  /**
   * Event title
   */
  name: string;
  /**
   * Plain text event description and details
   */
  description?: string | null;
  /**
   * HTML event description and details (if available from source, otherwise matches plain text description). Will only contain these HTML tags: b, br, em, i, li, p, span, strong, ul.
   */
  formattedDescription?: string | null;
  /**
   * Event website
   */
  url?: string | null;
  /**
   * Start date as YYYY-MM-DD
   */
  startDate: string;
  /**
   * Start time as HH:MM:SS (optional)
   */
  startTime?: string | null;
  /**
   * Ende date as YYYY-MM-DD (optional)
   */
  endDate?: string | null;
  /**
   * End time as HH:MM:SS (optional)
   */
  endTime?: string | null;
  /**
   * Main event performer (e.g. speaker, band, etc.)
   */
  performer?: string | null;
  /**
   * Event mode (e.g. presentation, meetup, etc.)
   */
  mode?: string | null;
  source?: {
    id?: number;
    /**
     * Name of event source
     */
    name: string;
  };
  location?: {
    id?: number;
    /**
     * Description of event location (address or similar)
     */
    description: string;
  };
  organizer?: {
    id?: number;
    /**
     * Name of event organizer
     */
    name: string;
  };
  images?: {
    id?: number;
    url: string;
    description?: string | null;
    source?: string | null;
    event: number;
  }[];
}

export interface EventSource {
  id?: number;
  /**
   * Name of event source
   */
  name: string;
}

export interface Location {
  id?: number;
  /**
   * Description of event location (address or similar)
   */
  description: string;
}

export interface Organizer {
  id?: number;
  /**
   * Name of event organizer
   */
  name: string;
}

export type ListEventsResponse = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Event[];
};

export interface ListEventsQueryParams {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  limit?: number;
  /**
   * Location ID to filter events for
   */
  location?: string;
  /**
   * Organizer ID to filter events for
   */
  organizer?: string;
  /**
   * Earliest event start date
   */
  minDate?: string;
  /**
   * Latest event start date
   */
  maxDate?: string;
}

export type ListEventsProps = Omit<
  GetProps<ListEventsResponse, unknown, ListEventsQueryParams, void>,
  "path"
>;

export const ListEvents = (props: ListEventsProps) => (
  <Get<ListEventsResponse, unknown, ListEventsQueryParams, void>
    path={encode`/events`}
    {...props}
  />
);

export type UseListEventsProps = Omit<
  UseGetProps<ListEventsResponse, unknown, ListEventsQueryParams, void>,
  "path"
>;

export const useListEvents = (props: UseListEventsProps) =>
  useGet<ListEventsResponse, unknown, ListEventsQueryParams, void>(
    encode`/events`,
    props
  );

export interface RetrieveEventQueryParams {
  /**
   * Location ID to filter events for
   */
  location?: string;
  /**
   * Organizer ID to filter events for
   */
  organizer?: string;
  /**
   * Earliest event start date
   */
  minDate?: string;
  /**
   * Latest event start date
   */
  maxDate?: string;
}

export interface RetrieveEventPathParams {
  /**
   * A unique integer value identifying this event.
   */
  id: string;
}

export type RetrieveEventProps = Omit<
  GetProps<Event, unknown, RetrieveEventQueryParams, RetrieveEventPathParams>,
  "path"
> &
  RetrieveEventPathParams;

export const RetrieveEvent = ({ id, ...props }: RetrieveEventProps) => (
  <Get<Event, unknown, RetrieveEventQueryParams, RetrieveEventPathParams>
    path={encode`/events/${id}`}
    {...props}
  />
);

export type UseRetrieveEventProps = Omit<
  UseGetProps<
    Event,
    unknown,
    RetrieveEventQueryParams,
    RetrieveEventPathParams
  >,
  "path"
> &
  RetrieveEventPathParams;

export const useRetrieveEvent = ({ id, ...props }: UseRetrieveEventProps) =>
  useGet<Event, unknown, RetrieveEventQueryParams, RetrieveEventPathParams>(
    (paramsInPath: RetrieveEventPathParams) =>
      encode`/events/${paramsInPath.id}`,
    { pathParams: { id }, ...props }
  );

export type ListEventSourcesResponse = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: EventSource[];
};

export interface ListEventSourcesQueryParams {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  limit?: number;
}

export type ListEventSourcesProps = Omit<
  GetProps<
    ListEventSourcesResponse,
    unknown,
    ListEventSourcesQueryParams,
    void
  >,
  "path"
>;

export const ListEventSources = (props: ListEventSourcesProps) => (
  <Get<ListEventSourcesResponse, unknown, ListEventSourcesQueryParams, void>
    path={encode`/sources`}
    {...props}
  />
);

export type UseListEventSourcesProps = Omit<
  UseGetProps<
    ListEventSourcesResponse,
    unknown,
    ListEventSourcesQueryParams,
    void
  >,
  "path"
>;

export const useListEventSources = (props: UseListEventSourcesProps) =>
  useGet<ListEventSourcesResponse, unknown, ListEventSourcesQueryParams, void>(
    encode`/sources`,
    props
  );

export interface RetrieveEventSourcePathParams {
  /**
   * A unique integer value identifying this event source.
   */
  id: string;
}

export type RetrieveEventSourceProps = Omit<
  GetProps<EventSource, unknown, void, RetrieveEventSourcePathParams>,
  "path"
> &
  RetrieveEventSourcePathParams;

export const RetrieveEventSource = ({
  id,
  ...props
}: RetrieveEventSourceProps) => (
  <Get<EventSource, unknown, void, RetrieveEventSourcePathParams>
    path={encode`/sources/${id}`}
    {...props}
  />
);

export type UseRetrieveEventSourceProps = Omit<
  UseGetProps<EventSource, unknown, void, RetrieveEventSourcePathParams>,
  "path"
> &
  RetrieveEventSourcePathParams;

export const useRetrieveEventSource = ({
  id,
  ...props
}: UseRetrieveEventSourceProps) =>
  useGet<EventSource, unknown, void, RetrieveEventSourcePathParams>(
    (paramsInPath: RetrieveEventSourcePathParams) =>
      encode`/sources/${paramsInPath.id}`,
    { pathParams: { id }, ...props }
  );

export type ListLocationsResponse = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Location[];
};

export interface ListLocationsQueryParams {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  limit?: number;
}

export type ListLocationsProps = Omit<
  GetProps<ListLocationsResponse, unknown, ListLocationsQueryParams, void>,
  "path"
>;

export const ListLocations = (props: ListLocationsProps) => (
  <Get<ListLocationsResponse, unknown, ListLocationsQueryParams, void>
    path={encode`/locations`}
    {...props}
  />
);

export type UseListLocationsProps = Omit<
  UseGetProps<ListLocationsResponse, unknown, ListLocationsQueryParams, void>,
  "path"
>;

export const useListLocations = (props: UseListLocationsProps) =>
  useGet<ListLocationsResponse, unknown, ListLocationsQueryParams, void>(
    encode`/locations`,
    props
  );

export interface RetrieveLocationPathParams {
  /**
   * A unique integer value identifying this location.
   */
  id: string;
}

export type RetrieveLocationProps = Omit<
  GetProps<Location, unknown, void, RetrieveLocationPathParams>,
  "path"
> &
  RetrieveLocationPathParams;

export const RetrieveLocation = ({ id, ...props }: RetrieveLocationProps) => (
  <Get<Location, unknown, void, RetrieveLocationPathParams>
    path={encode`/locations/${id}`}
    {...props}
  />
);

export type UseRetrieveLocationProps = Omit<
  UseGetProps<Location, unknown, void, RetrieveLocationPathParams>,
  "path"
> &
  RetrieveLocationPathParams;

export const useRetrieveLocation = ({
  id,
  ...props
}: UseRetrieveLocationProps) =>
  useGet<Location, unknown, void, RetrieveLocationPathParams>(
    (paramsInPath: RetrieveLocationPathParams) =>
      encode`/locations/${paramsInPath.id}`,
    { pathParams: { id }, ...props }
  );

export type ListOrganizersResponse = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Organizer[];
};

export interface ListOrganizersQueryParams {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  limit?: number;
}

export type ListOrganizersProps = Omit<
  GetProps<ListOrganizersResponse, unknown, ListOrganizersQueryParams, void>,
  "path"
>;

export const ListOrganizers = (props: ListOrganizersProps) => (
  <Get<ListOrganizersResponse, unknown, ListOrganizersQueryParams, void>
    path={encode`/organizers`}
    {...props}
  />
);

export type UseListOrganizersProps = Omit<
  UseGetProps<ListOrganizersResponse, unknown, ListOrganizersQueryParams, void>,
  "path"
>;

export const useListOrganizers = (props: UseListOrganizersProps) =>
  useGet<ListOrganizersResponse, unknown, ListOrganizersQueryParams, void>(
    encode`/organizers`,
    props
  );

export interface RetrieveOrganizerPathParams {
  /**
   * A unique integer value identifying this organizer.
   */
  id: string;
}

export type RetrieveOrganizerProps = Omit<
  GetProps<Organizer, unknown, void, RetrieveOrganizerPathParams>,
  "path"
> &
  RetrieveOrganizerPathParams;

export const RetrieveOrganizer = ({ id, ...props }: RetrieveOrganizerProps) => (
  <Get<Organizer, unknown, void, RetrieveOrganizerPathParams>
    path={encode`/organizers/${id}`}
    {...props}
  />
);

export type UseRetrieveOrganizerProps = Omit<
  UseGetProps<Organizer, unknown, void, RetrieveOrganizerPathParams>,
  "path"
> &
  RetrieveOrganizerPathParams;

export const useRetrieveOrganizer = ({
  id,
  ...props
}: UseRetrieveOrganizerProps) =>
  useGet<Organizer, unknown, void, RetrieveOrganizerPathParams>(
    (paramsInPath: RetrieveOrganizerPathParams) =>
      encode`/organizers/${paramsInPath.id}`,
    { pathParams: { id }, ...props }
  );
