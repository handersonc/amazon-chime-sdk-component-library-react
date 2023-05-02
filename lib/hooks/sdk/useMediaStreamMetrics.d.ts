interface MediaStreamMetrics {
    audioPacketsSentFractionLossPercent: number | null;
    audioPacketsReceivedFractionLossPercent: number | null;
    audioSpeakerDelayMs: number | null;
    audioUpstreamRoundTripTimeMs: number | null;
    audioUpstreamJitterMs: number | null;
    audioDownstreamJitterMs: number | null;
    currentRoundTripTimeMs: number | null;
    availableOutgoingBandwidth: number | null;
    availableIncomingBandwidth: number | null;
    rtcStatsReport: RTCStatsReport | null;
    videoStreamMetrics: {
        [attendeeId: string]: {
            [ssrc: string]: {
                [key: string]: number;
            };
        };
    };
}
export declare function useMediaStreamMetrics(): MediaStreamMetrics;
export default useMediaStreamMetrics;
