[Constructor(optional VISClientOptions options)]
interface VISClient {
    readonly attribute DOMString?      host;
    readonly attribute DOMString?      protocol;
    readonly attribute unsigned short? port;

    void            connect(ConnectCallback connectCallback,
                            ErrorCallback errorCallback);
    void            authorize(object tokens,
                              AuthorizeCallback authorizeCallback,
                              ErrorCallback errorCallback);
    void            getVSS(DOMString path,
                           GetVSSCallback getVSSCallback,
                           ErrorCallback errorCallback);
    void            get(DOMString path,
                        GetCallback getCallback,
                        ErrorCallback errorCallback);
    void            set(DOMString path,
                        any value,
                        SetCallback setCallback,
                        ErrorCallback errorCallback);
    VISSubscription subscribe(DOMString path,
                              SubscriptionCallback subscriptionCallback,
                              ErrorCallback errorCallback,
                              optional SubscribeFilters filters);
    void            unsubscribe(VISSubscription subscription,
                                UnsubscribeCallback unsubscribeCallback,
                                ErrorCallback errorCallback);
    void            unsubscribeAll(UnsubscribeCallback unsubscribeCallback,
                                   ErrorCallback errorCallback);
    void            disconnect(DisconnectCallback disconnectCallback,
                               ErrorCallback errorCallback);
};

interface VISClientOptions {
    attribute DOMString?      host;
    attribute DOMString?      protocol;
    attribute unsigned short? port;
};

interface VISValue {
    attribute any          value;
    attribute DOMTimeStamp timeStamp;
};

interface VISError {
    attribute unsigned short number;
    attribute DOMString?     reason;
    attribute DOMString?     message;
    attribute DOMTimeStamp   timeStamp;
};